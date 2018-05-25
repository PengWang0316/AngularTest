import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import IEmployee from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = '../assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<IEmployee[]>(this.url).catch(this.errorHandler);
  }

  errorHandler(err: HttpErrorResponse) {
    return Observable.throw(err.message || 'Sever Error!');
  }
}
