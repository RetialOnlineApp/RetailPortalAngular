import { Route } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



export const MODULE_ROUTES: Route[] = [
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'forgot', component: ForgotPasswordComponent },



]

export const MODULE_COMPONENTS = [
	SigninComponent,
	SignupComponent,
	ForgotPasswordComponent
]
