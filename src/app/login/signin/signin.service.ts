import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';



@Injectable()
export class SignInService {

  public headers = new Headers({ 'Content-Type': 'application/json' });
  accessToken: string;


  constructor(private http: HttpClient) { }


  getAccessToken(email: String, password: String) {
    return this.http.post("http://localhost:8080/api/auth/accessToken", { "email": email, "password": password }, this.headers)


  }
}