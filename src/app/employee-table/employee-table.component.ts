import { Component, OnInit} from '@angular/core';
import {Employee, GENDER} from "../model/empleyee.model";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employeeData: Array<Employee> = [];
  pieChartData = {};
  rowChartData = {};

  constructor(private employeeService: EmployeeService,
              private store: Store<{ employeeStore: Array<Employee> }>,
              private router: Router) {

  }

  ngOnInit() {
    this.store.select('employeeStore').subscribe(
      result => {
        if( result && result.length >= 1) {
          this.employeeData = [...result];
          this.pieChartData = this.getPieChartData(result);
          this.rowChartData = this.getBarChartData(result);
        }
      }
    )
  }

  navigateToAddForm(): void {
    this.router.navigate(['/add-employee']);
  }

  getPieChartData(employee: Array<Employee>) {
    let jobs: Map<string, number> = new Map<string, number>();
    let dataToShow: Array<number> = [];
    let labelsToShow: Array<string> = [];

    employee.forEach( (emp) => {
      let jobsCount = jobs.get(emp.jobTitle);
      if(jobsCount) {
        jobs.set(emp.jobTitle, jobsCount+1);
      } else {
        jobs.set(emp.jobTitle, 1);
      }
    });

    jobs.forEach( (value, key, map) => { labelsToShow.push(key); dataToShow.push(value); } )
    return {
        labels: labelsToShow,
        datasets: [{
          label: 'Job titles',
          data: dataToShow
        }]
    }
  }

  getBarChartData(employee: Array<Employee>) {
    let genders: Map<GENDER, number> = new Map<GENDER, number>();
    let dataToShow: Array<number> = [];
    let labelsToShow: Array<GENDER> = [];

    employee.forEach( (emp) => {
      let gendersCount = genders.get(emp.gender);
      if(gendersCount) {
        genders.set(emp.gender, gendersCount+1);
      } else {
        genders.set(emp.gender, 1);
      }
    });

    genders.forEach( (value, key, map) => { labelsToShow.push(key); dataToShow.push(value); } )
    return {
      labels: labelsToShow,
      datasets: [{
        label: "Genders",
        data: dataToShow
      }]
    }
  }

}
