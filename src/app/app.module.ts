import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: '',
				redirectTo: '/login',
				pathMatch: 'full'
			},

		])
	],
	providers: [],
	bootstrap: [LoginComponent]
})
export class AppModule { }
