import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { CommandHandlers } from './commands/handlers';
import { OrganizationRecurringExpenseController } from './organization-recurring-expense.controller';
import { OrganizationRecurringExpense } from './organization-recurring-expense.entity';
import { OrganizationRecurringExpenseService } from './organization-recurring-expense.service';
import { QueryHandlers } from './queries/handlers';
import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import { Organization } from '../organization/organization.entity';
import { OrganizationService } from '../organization/organization.service';
import { TenantModule } from '../tenant/tenant.module';

@Module({
	imports: [
		RouterModule.register([
			{
				path: '/organization-recurring-expense',
				module: OrganizationRecurringExpenseModule
			}
		]),
		TypeOrmModule.forFeature([OrganizationRecurringExpense, Organization, Employee]),
		CqrsModule,
		TenantModule
	],
	controllers: [OrganizationRecurringExpenseController],
	providers: [
		OrganizationRecurringExpenseService,
		EmployeeService,
		OrganizationService,
		...QueryHandlers,
		...CommandHandlers
	],
	exports: [OrganizationRecurringExpenseService]
})
export class OrganizationRecurringExpenseModule {}
