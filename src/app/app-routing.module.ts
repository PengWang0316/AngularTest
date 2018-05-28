import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

const routes: Routes = [
  // {  path: '' , redirctTo: '/xxxx', pathMatch: 'full' }, default router
  {
    path: 'employeeDetail/:id',
    //children: []
    component: EmployeeDetailComponent
  },
  {// Has to be the last one int the routers
    path: '**',
    component: PageNotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeDetailComponent, PageNotFountComponent];
