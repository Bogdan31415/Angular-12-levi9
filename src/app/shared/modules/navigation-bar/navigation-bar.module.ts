import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../header/header.module";
import { MaterialModule } from "../../../material.module";
import { FlexModule } from "@angular/flex-layout";



@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule,
    HeaderModule,
    FlexModule
  ],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }
