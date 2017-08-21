import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FooterComponent } from './shared/footer/footer.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {HomeComponent} from './dashboard/home/home.component'




@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		FooterComponent,
		NavbarComponent,
		SidebarComponent,
		HomeComponent

	],
	imports: [
		BrowserModule,
/*		RouterModule.forRoot([
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
				redirectTo: 'login',
				pathMatch: 'full'
			},

		])*/
	],
	providers: [],
	bootstrap: [DashboardComponent]
})
export class AppModule { }
