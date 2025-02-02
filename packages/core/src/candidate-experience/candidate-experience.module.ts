import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { CandidateExperience } from './candidate-experience.entity';
import { CandidateExperienceService } from './candidate-experience.service';
import { CandidateExperienceController } from './candidate-experience.controller';
import { TenantModule } from '../tenant/tenant.module';

@Module({
	imports: [
		RouterModule.register([{ path: '/candidate-experience', module: CandidateExperienceModule }]),
		TypeOrmModule.forFeature([CandidateExperience]),
		TenantModule
	],
	providers: [CandidateExperienceService],
	controllers: [CandidateExperienceController],
	exports: [CandidateExperienceService]
})
export class CandidateExperienceModule {}
