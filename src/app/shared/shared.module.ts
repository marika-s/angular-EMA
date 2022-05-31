import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ManagerDirective } from './directives/manager.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    ManagerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ManagerDirective]
})
export class SharedModule { }
