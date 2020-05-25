import { BaseEntityModel as IBaseEntityModel } from './base-entity.model';
import { Role } from './role.model';
import { ITenant } from './tenant.model';

export interface RolePermissions extends IBaseEntityModel {
	roleId: string;
	permission: string;
	role: Role;
	enabled: boolean;
	tenant: ITenant;
}

export interface RolePermissionsCreateInput {
	roleId: string;
	permission: string;
	enabled: boolean;
	tenant: ITenant;
}

export interface RolePermissionsUpdateInput extends IBaseEntityModel {
	enabled: boolean;
}

export enum PermissionsEnum {
	ADMIN_DASHBOARD_VIEW = 'ADMIN_DASHBOARD_VIEW',
	ORG_INCOMES_VIEW = 'ORG_INCOMES_VIEW',
	ORG_INCOMES_EDIT = 'ORG_INCOMES_EDIT',
	ORG_EXPENSES_VIEW = 'ORG_EXPENSES_VIEW',
	ORG_EXPENSES_EDIT = 'ORG_EXPENSES_EDIT',
	ORG_PROPOSALS_VIEW = 'ORG_PROPOSALS_VIEW',
	ORG_PROPOSALS_EDIT = 'ORG_PROPOSALS_EDIT',
	ORG_TIME_OFF_VIEW = 'ORG_TIME_OFF_VIEW',
	ORG_EMPLOYEES_VIEW = 'ORG_EMPLOYEES_VIEW',
	ORG_EMPLOYEES_EDIT = 'ORG_EMPLOYEES_EDIT',
	ORG_CANDIDATES_VIEW = 'ORG_CANDIDATES_VIEW',
	ORG_CANDIDATES_EDIT = 'ORG_CANDIDATES_EDIT',
	ORG_CANDIDATES_INTERVIEW_EDIT = 'ORG_CANDIDATES_INTERVIEW_EDIT',
	ORG_CANDIDATES_DOCUMENTS_VIEW = 'ORG_CANDIDATES_DOCUMENTS_VIEW',
	ORG_CANDIDATES_TASK_EDIT = 'ORG_CANDIDATES_TASK_EDIT',
	ORG_CANDIDATES_FEEDBACK_EDIT = 'ORG_CANDIDATES_FEEDBACK',
	ORG_INVENTORY_PRODUCT_EDIT = 'ORG_INVENTORY_PRODUCT_EDIT',
	ORG_TAGS_EDIT = 'ORG_TAGS_EDIT',
	ORG_USERS_VIEW = 'ORG_USERS_VIEW',
	ORG_USERS_EDIT = 'ORG_USERS_EDIT',
	ORG_INVITE_VIEW = 'ORG_INVITE_VIEW',
	ORG_INVITE_EDIT = 'ORG_INVITE_EDIT',
	ALL_ORG_VIEW = 'ALL_ORG_VIEW',
	ALL_ORG_EDIT = 'ALL_ORG_EDIT',
	POLICY_VIEW = 'POLICY_VIEW',
	POLICY_EDIT = 'POLICY_EDIT',
	REQUEST_APPROVAL_VIEW = 'REQUEST_APPROVAL_VIEW',
	REQUEST_APPROVAL_EDIT = 'REQUEST_APPROVAL_EDIT',
	APPROVAL_POLICY_VIEW = 'APPROVALS_POLICY_VIEW',
	APPROVAL_POLICY_EDIT = 'APPROVALS_POLICY_EDIT',
	CHANGE_SELECTED_EMPLOYEE = 'CHANGE_SELECTED_EMPLOYEE',
	CHANGE_SELECTED_CANDIDATE = 'CHANGE_SELECTED_CANDIDATE',
	CHANGE_SELECTED_ORGANIZATION = 'CHANGE_SELECTED_ORGANIZATION',
	CHANGE_ROLES_PERMISSIONS = 'CHANGE_ROLES_PERMISSIONS',
	ACCESS_PRIVATE_PROJECTS = 'ACCESS_PRIVATE_PROJECTS',
	TIMESHEET_EDIT_TIME = 'TIMESHEET_EDIT_TIME',
	SUPER_ADMIN_EDIT = 'SUPER_ADMIN_EDIT',
	PUBLIC_PAGE_EDIT = 'PUBLIC_PAGE_EDIT',
	INVOICES_VIEW = 'INVOICES_VIEW',
	INVOICES_EDIT = 'INVOICES_EDIT',
	ORG_CANDIDATES_INTERVIEWERS_EDIT = 'ORG_CANDIDATES_INTERVIEWERS_EDIT',
	PROPOSALS_EDIT = 'PROPOSALS_EDIT'
}

export const PermissionGroups = {
	//Permissions which can be given to any role
	GENERAL: [
		PermissionsEnum.ADMIN_DASHBOARD_VIEW,
		PermissionsEnum.ORG_EXPENSES_VIEW,
		PermissionsEnum.ORG_EXPENSES_EDIT,
		PermissionsEnum.ORG_INCOMES_EDIT,
		PermissionsEnum.ORG_INCOMES_VIEW,
		PermissionsEnum.ORG_PROPOSALS_EDIT,
		PermissionsEnum.ORG_PROPOSALS_VIEW,
		PermissionsEnum.ORG_TIME_OFF_VIEW,
		PermissionsEnum.ORG_INVITE_VIEW,
		PermissionsEnum.ORG_INVITE_EDIT,
		PermissionsEnum.POLICY_VIEW,
		PermissionsEnum.POLICY_EDIT,
		PermissionsEnum.APPROVAL_POLICY_EDIT,
		PermissionsEnum.APPROVAL_POLICY_VIEW,
		PermissionsEnum.REQUEST_APPROVAL_EDIT,
		PermissionsEnum.REQUEST_APPROVAL_VIEW,
		PermissionsEnum.ACCESS_PRIVATE_PROJECTS,
		PermissionsEnum.TIMESHEET_EDIT_TIME,
		PermissionsEnum.INVOICES_VIEW,
		PermissionsEnum.INVOICES_EDIT,
		PermissionsEnum.ORG_CANDIDATES_DOCUMENTS_VIEW,
		PermissionsEnum.ORG_CANDIDATES_TASK_EDIT,
		PermissionsEnum.ORG_CANDIDATES_INTERVIEW_EDIT,
		PermissionsEnum.ORG_CANDIDATES_INTERVIEWERS_EDIT,
		PermissionsEnum.ORG_CANDIDATES_FEEDBACK_EDIT,
		PermissionsEnum.ORG_INVENTORY_PRODUCT_EDIT,
		PermissionsEnum.ORG_TAGS_EDIT
	],

	//Readonly permissions, are only enabled for admin role
	ADMINISTRATION: [
		PermissionsEnum.ORG_EMPLOYEES_VIEW,
		PermissionsEnum.ORG_EMPLOYEES_EDIT,
		PermissionsEnum.ORG_CANDIDATES_VIEW,
		PermissionsEnum.ORG_CANDIDATES_EDIT,
		PermissionsEnum.ORG_USERS_VIEW,
		PermissionsEnum.ORG_USERS_EDIT,
		PermissionsEnum.ALL_ORG_VIEW,
		PermissionsEnum.ALL_ORG_EDIT,
		PermissionsEnum.CHANGE_SELECTED_EMPLOYEE,
		PermissionsEnum.CHANGE_SELECTED_CANDIDATE,
		PermissionsEnum.CHANGE_SELECTED_ORGANIZATION,
		PermissionsEnum.CHANGE_ROLES_PERMISSIONS,
		PermissionsEnum.SUPER_ADMIN_EDIT,
		PermissionsEnum.PUBLIC_PAGE_EDIT,
		PermissionsEnum.ORG_INVENTORY_PRODUCT_EDIT,
		PermissionsEnum.APPROVAL_POLICY_EDIT,
		PermissionsEnum.APPROVAL_POLICY_VIEW,
		PermissionsEnum.REQUEST_APPROVAL_EDIT,
		PermissionsEnum.REQUEST_APPROVAL_VIEW
	]
};
