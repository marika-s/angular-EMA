import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeesService } from './employees.service';



@NgModule({
  declarations: [
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
