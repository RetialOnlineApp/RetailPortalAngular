import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {

  public headers = new Headers({ 'Content-Type': 'application/json' });
  results: string[];

  constructor(private http: HttpClient) { }

  getPeople(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/2', this.headers).
      subscribe(
      data => {
        this.results = data as string[];
      },
      err => {
        console.log("=======================" + JSON.stringify(err["status"]));
      });

    alert(this.results);
    console.log("===========================" + JSON.stringify(this.results['userId']));
  }

  getDemo() : string[] {
  	this.getPeople();
  	return this.results;
  }


}