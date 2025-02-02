import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbListModule,
	NbSelectModule,
	NbSpinnerModule,
	NbTabsetModule,
	NbTooltipModule,
	NbActionsModule
} from '@nebular/theme';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { RecurringExpenseDeleteConfirmationModule } from '../../@shared/expenses/recurring-expense-delete-confirmation/recurring-expense-delete-confirmation.module';
import { RecurringExpenseMutationModule } from '../../@shared/expenses/recurring-expense-mutation/recurring-expense-mutation.module';
import { ImageUploaderModule } from '../../@shared/image-uploader/image-uploader.module';
import { OrganizationsMutationModule } from '../../@shared/organizations/organizations-mutation/organizations-mutation.module';
import { RemoveLodashModule } from '../../@shared/remove-lodash/remove-lodash.module';
import { UserFormsModule } from '../../@shared/user/forms/user-forms.module';
import { ThemeModule } from '../../@theme/theme.module';
import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import {
	OrganizationsCurrencyComponent,
	OrganizationTotalEmployeesCountComponent,
	OrganizationsFullnameComponent,
	OrganizationsStatusComponent
} from './table-components';
import { OrganizationEmploymentTypesService } from '../../@core/services/organization-employment-types.service';
import { RecurringExpenseHistoryModule } from '../../@shared/expenses/recurring-expense-history/recurring-expense-history.module';
import { RecurringExpenseBlockModule } from '../../@shared/expenses/recurring-expense-block/recurring-expense-block.module';
import { TableComponentsModule } from '../../@shared/table-components';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TranslateModule } from '../../@shared/translate/translate.module';
import { GauzyButtonActionModule } from '../../@shared/gauzy-button-action/gauzy-button-action.module';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { PaginationModule } from '../../@shared/pagination/pagination.module';
import { DirectivesModule } from '../../@shared/directives/directives.module';

@NgModule({
	imports: [
		TableComponentsModule,
		OrganizationsRoutingModule,
		ThemeModule,
		NbCardModule,
		FormsModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbInputModule,
		Angular2SmartTableModule,
		NbIconModule,
		NbDialogModule.forChild(),
		OrganizationsMutationModule,
		UserFormsModule,
		ImageUploaderModule,
		NbSelectModule,
		RemoveLodashModule,
		NbListModule,
		NbTabsetModule,
		RecurringExpenseMutationModule,
		RecurringExpenseDeleteConfirmationModule,
		NbTooltipModule,
		TranslateModule,
		NbSpinnerModule,
		NbActionsModule,
		RecurringExpenseHistoryModule,
		RecurringExpenseBlockModule,
		NgxPermissionsModule.forChild(),
		GauzyButtonActionModule,
		CardGridModule,
		PaginationModule,
		DirectivesModule
	],
	declarations: [
		OrganizationsComponent,
		OrganizationsFullnameComponent,
		OrganizationsStatusComponent,
		OrganizationTotalEmployeesCountComponent,
		OrganizationsCurrencyComponent
	],
	providers: [OrganizationEmploymentTypesService]
})
export class OrganizationsModule { }
