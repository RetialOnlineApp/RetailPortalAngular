import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';
@Component({
	selector: 'signin-cmp',
	templateUrl: 'signin.component.html',
	providers: [SignInService]
})

export class SigninComponent implements OnInit {

	public userName = "";
	public password = "";

	constructor(private service: SignInService) { }

	ngOnInit(): void {
		let token = this.service.getAccessToken("munjewar_vivek@tecnics.com", "12345");
		alert(token);
		console.log("================================" + token);

	}

	onLogin(){
		console.log("User Name",this.userName);
		console.log("PassWord",this.password);
		alert(this.userName +"  "+ this.password);
	}

}