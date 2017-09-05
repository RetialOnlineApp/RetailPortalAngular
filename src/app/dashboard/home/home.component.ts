import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    results: string;
 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://jsonplaceholder.typicode.com/posts/2/l').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data as string;
    },
    err  => {
        console.log("======================="+JSON.stringify(err["status"]));
    });
    alert(this.results);
    console.log("==========================="+JSON.stringify(this.results['userId']));
  }
}
