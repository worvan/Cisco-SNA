import {Employee} from "../model/empleyee.model";
import {EmployeeActions, EmployeeActionType} from "./employee.actions";

const initState: Array<Employee> = [];

export function employeeReducer( state = initState, action: EmployeeActions ): Array<Employee> {
  switch(action.type) {
    case EmployeeActionType.ADD_EMPLOYEE: {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case EmployeeActionType.CLEAR_EMPLOYEES: {
      return [...initState];
    }
    case EmployeeActionType.REPLACE_EMPLOYEES: {
      return action.payload;
    }
    default: {
      return [...initState];
    }
  }
}
