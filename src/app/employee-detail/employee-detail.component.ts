import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

// import IEmployee from '../IEmployee';

@Component({
  selector: 'app-employee-detail',
  template: `
            <div><h2>The employee detail component</h2></div>
            <div class="red">{{errorMsg}}</div>
            <div *ngFor="let employee of employees">
              <ul><li>{{employee.id}}  {{employee.name}}  {{employee.age}}</li></ul>
            </div>
  `,
  styles: [`
           .red{
                color: red;
           }
    `]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

}
