import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';
import { Router } from '@angular/router'

@Component({
	selector: 'signin-cmp',
	templateUrl: 'signin.component.html',
	providers: [SignInService]
})

export class SigninComponent {

	public email = "";
	public password = "";

	constructor(private service: SignInService, private router: Router) { }

	onLogin() {
		let accessToken = "";
		this.service.getAccessToken(this.email, this.password).subscribe(
			data => {
				console.log("data :::", data);
				accessToken = data["accessToken"];
				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('user', this.email);

			},
			error => {
				console.log("error status", error.status);
			},
			() => {
				this.navigeToDashboard();
			});

	}


	navigeToDashboard() {
		this.router.navigateByUrl('dashboard');
	}

}