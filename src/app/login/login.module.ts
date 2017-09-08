import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './login.routes';
import { FormsModule } from '@angular/forms';


@NgModule({
	imports: [
		FormsModule,
		RouterModule.forChild(MODULE_ROUTES)
	],
	declarations: [MODULE_COMPONENTS]
})

export class LoginModule { }
