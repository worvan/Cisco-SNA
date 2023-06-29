import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {EmployeeService} from "./service/employee.service";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {ChartModule} from "primeng/chart";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {ActionReducer, StoreModule} from "@ngrx/store";
import {employeeReducer} from "./store/employee.reducer";
import {Employee} from "./model/empleyee.model";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    ButtonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ employeeStore: employeeReducer as ActionReducer<Employee[]> })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
