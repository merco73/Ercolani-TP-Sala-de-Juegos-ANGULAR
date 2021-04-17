import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMenuComponent } from './navbar-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    //! MUY IMPORTANTE ROUTERMODULE
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarMenuComponent
  ]
})
export class NavbarMenuModule { }
