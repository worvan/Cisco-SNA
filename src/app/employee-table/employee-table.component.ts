import { Component, Input, OnInit} from '@angular/core';
import { Employee } from "../model/empleyee.model";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employeeData: Array<Employee> = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) {

  }

  ngOnInit() {
    this.employeeService.employeeStream$.subscribe(
      result => {
        this.employeeData = result;
      }
    )
  }

  navigateToAddForm(): void {
    this.router.navigate(['/add-employee']);
  }

}
