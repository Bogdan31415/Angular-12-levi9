import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { MaterialModule } from "../../../material.module";



@NgModule({
	declarations: [
		UserComponent
	],
	exports: [
		UserComponent
	],
	imports: [
		CommonModule,
    MaterialModule
	]
})
export class UserModule { }
