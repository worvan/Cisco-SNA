import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from "./employee-table/employee-table.component";

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: "full"},
  { path: 'employees', component: EmployeeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
