import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from "./employee-table/employee-table.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: "full"},
  { path: 'employees', component: EmployeeTableComponent },
  { path: 'add-employee', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
