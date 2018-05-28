import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// import IEmployee from '../IEmployee';

@Component({
  selector: 'app-employee-detail',
  template: `
            <div><h2>The employee detail component</h2></div>
            <div class="red">{{errorMsg}}</div>
            <div *ngFor="let employee of employees">
              <ul><li>{{employee.id}}  {{employee.name}}  {{employee.age}}</li></ul>
            </div>
            <h3>The param id is: {{id}}</h3>
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
  public id: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {console.log(this.route);
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.id = id;
    this.route.paramMap.subscribe((params: ParamMap) => this.id = parseInt(params.get('id')));
  }

}
