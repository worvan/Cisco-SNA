import { Action } from '@ngrx/store';
import { Employee } from "../model/empleyee.model";

export enum EmployeeActionType {
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  REPLACE_EMPLOYEES = 'REPLACE_EMPLOYEES',
  CLEAR_EMPLOYEES = 'CLEAR_EMPLOYEES'
}

export class AddEmployeeAction implements Action {
  readonly type = EmployeeActionType.ADD_EMPLOYEE;
  constructor(public payload: Employee) {
  }
}

export class ReplaceEmployeesAction implements Action {
  readonly type = EmployeeActionType.REPLACE_EMPLOYEES;
  constructor(public payload: Array<Employee>) {
  }
}

export class ClearEmployeesAction implements Action {
  readonly type = EmployeeActionType.CLEAR_EMPLOYEES;
}

  export type EmployeeActions = AddEmployeeAction | ReplaceEmployeesAction | ClearEmployeesAction;
