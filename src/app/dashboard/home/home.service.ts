import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {

  public headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

   public getAll<T>(): Observable<T> {
        return this.http.get<T>("https://jsonplaceholder.typicode.com/posts/1");
    }

}