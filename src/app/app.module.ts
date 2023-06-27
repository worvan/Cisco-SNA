import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {EmployeeService} from "./service/employee.service";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";

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
    TableModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
