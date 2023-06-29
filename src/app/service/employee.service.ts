import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/empleyee.model";
import {Store} from "@ngrx/store";
import {AddEmployeeAction, ClearEmployeesAction, ReplaceEmployeesAction} from "../store/employee.actions";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,
              private store: Store<{ employeeStore: Array<Employee> }> ) { }

  clearEmployees() {
    this.store.dispatch( new ClearEmployeesAction() );
  }

  addEmployee(emp: Employee) {
    this.store.dispatch( new AddEmployeeAction(emp) );
  }

  replaceEmployees(emp: Array<Employee>) {
    this.store.dispatch( new ReplaceEmployeesAction(emp) );
  }

  loadJSONData(): void {
        this.http.get<Employee[]>('/assets/new_hire.json')
      .subscribe( (result) => {
        //this.employeeStream$.next(result);
        this.replaceEmployees(result);
      });
  }
}
