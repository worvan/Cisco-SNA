import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/empleyee.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeStream$: Subject<Employee[]> = new Subject<Employee[]>();

  constructor(private http: HttpClient) {
  }

  loadJSONData(): void {
    this.employeeStream$.next([]);

    this.http.get<Employee[]>('/assets/new_hire.json')
      .subscribe( (result) => {
        //might be better to use ngrx store for distribution
        this.employeeStream$.next(result);
      });
  }
}
