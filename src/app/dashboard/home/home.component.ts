import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HomeService} from './home.service';


declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [HomeService]
})

export class HomeComponent implements OnInit {
    results: string[];

    constructor(private service: HomeService) { }

    ngOnInit(): void {
        this.results = this.service.getDemo();
        alert(JSON.stringify(this.results))
    }
}
