import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

// import IEmployee from '../IEmployee';

@Component({
  selector: 'app-test',
  template: `<p *ngIf="isDisplayName; else elseBlock">
                Holle {{name}}
              </p>
              <div class="red">{{errorMsg}}</div>
              <ng-template #elseBlock>
                <div>No name</div>
              </ng-template>
              <input [(ngModel)]="name" type="text" />
              <input #myInput value={{name}} type="text" />
              <button (click)="onClick($event, myInput.value)">click</button>

              <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">red</div>
                <div *ngSwitchCase="'blue'">blue</div>
                <div *ngSwitchDefault>No color</div>
              </div>

              <div *ngFor="let employee of employees; index as i; last as l; first as f; odd as o; even as e">
                <ul>
                  <li>Is the first element: {{f}} the index: {{i}} Name: {{employee.name}} is the last element:  {{l}} is the odd: {{o}} is the even: {{e}}</li>
                </ul>
              </div>

              <div>
                <div>Pipes examples:</div>
                <h2>{{ name | lowercase}}</h2>
                <h2>{{ name | uppercase}}</h2>
                <h2>{{ name | titlecase}}</h2>
                <h2>{{ name | slice:0:2}}</h2>

                <h2>{{ 5.356 | number:'1.2-3'}}</h2>
                <h2>{{ 5.356 | number:'3.4-5'}}</h2>
                <h2>{{ 5.356 | number:'3.1-2'}}</h2>

                <h2>{{ 0.25 | currency }}</h2>
                <h2>{{ 0.25 | currency: 'EUR' }}</h2>
                <h2>{{ 0.25 | currency: 'GBP':'code' }}</h2>

                <h2>{{ date | date: 'short' }}</h2>
                <h2>{{ date | date: 'shortDate' }}</h2>
                <h2>{{ date | date: 'shortTime' }}</h2>
              </div>
              `,
  styles: [`
            p {
              color: red;
            }
    `]
})
export class TestComponent implements OnInit {

  @Input() public name;
  @Output() public childEvent = new EventEmitter();

  public isDisplayName: boolean = true;
  public color: string = 'red';
  public employees = [];
  public date: Date = new Date();
  public errorMsg: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

  onClick(event, inputValue) {
    this.name = inputValue;
    this.color = 'blue';
    this.isDisplayName = !this.isDisplayName;
    this.childEvent.emit(inputValue);
    console.log(event);
  }

}
