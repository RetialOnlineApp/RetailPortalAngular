import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {SettingsComponent} from './settings/settings.component';;


@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarComponent, SettingsComponent ],
    exports: [ NavbarComponent, SettingsComponent ]
})

export class NavbarModule {}
