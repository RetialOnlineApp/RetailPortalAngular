import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
//import initIndex = require('../../../assets/assets/js/charts.js');
//import initMain = require('../../../assets/assets/js/index.js');


declare var $:any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        //initIndex();
        //initMain();
    }
}
