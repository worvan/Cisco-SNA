import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./service/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Corporate Employees';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.loadJSONData();
  }
}
