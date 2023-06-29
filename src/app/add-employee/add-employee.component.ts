import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../model/empleyee.model";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
    this.addForm = new FormGroup({
      'name': new FormControl('', [Validators.required] ),
      'jobTitle': new FormControl('', [Validators.required] ),
      'tenure': new FormControl('', [Validators.required, Validators.pattern('[0-9].*')]),
      'gender': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.addForm.valid) {
      let newEmployee: Employee = {
        name: this.addForm.controls['name'].value,
        jobTitle: this.addForm.controls['jobTitle'].value,
        tenure: this.addForm.controls['tenure'].value,
        gender: this.addForm.controls['gender'].value,
      }
      this.employeeService.addEmployee(newEmployee);
      this.router.navigate(['/employees']);
    }
  }

  ngOnInit() {

  }

}
