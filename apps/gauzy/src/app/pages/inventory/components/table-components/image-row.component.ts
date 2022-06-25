import { Component, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { DEFAULT_SVG } from './../../../../@core/constants';

@Component({
	template: `
		<div class="img-container">
			<img *ngIf="imageUrl" [src]="imageUrl" alt="feature img" />
			<div class="no-image" *ngIf="!imageUrl">
				<div class="content">
					<i class="fas fa-image"></i>
					<div>{{ 'ORGANIZATIONS_PAGE.NO_IMAGE' | translate }}</div>
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			.img-container {
				width: 74px;
				display: flex;
				justify-content: flex-start;
			}
			img {
				width: 74px;
				height: 60px;
				object-fit: cover;
				border-radius: 4px;
			}

			.variant-table-img {
				border-radius: 50%;
			}
			.no-image {
				width: 100%;
				height: 60px;
				background-color: var(--gauzy-sidebar-background-3);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 4px;
				font-size: 9px;
				font-weight: 400;
				line-height: 11px;
				letter-spacing: 0em;
				text-align: left;
				color: var(--gauzy-text-color-2);
			}

			.content {
				display: flex;
				align-items: baseline;
				padding: 8px;
				gap: 5px;
			}
		`
	]
})
export class ImageRowComponent implements ViewCell {
	@Input()
	value: any;
	rowData: any;

	fallbackSvg = DEFAULT_SVG;

	get imageUrl() {
		if (this.rowData.imageUrl) {
			return this.rowData.imageUrl;
		}
		if (this.rowData.featuredImage && this.rowData.featuredImage.url) {
			return this.rowData.featuredImage.url;
		}
		if (this.rowData.url) {
			return this.rowData.url;
		}

		if (!this.value) return false;

		if (this.value.imageUrl) return this.value.imageUrl;

		if (this.value.url) return this.value.url;

		if (typeof this.value == 'string') return this.value;
	}
}
