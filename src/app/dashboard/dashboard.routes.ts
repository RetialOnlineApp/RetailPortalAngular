import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add/add-product.component';
import { EditProductComponent } from './products/edit/edit-product.component';
import { ManageOrdersComponent } from './orders/manage-orders/manage-orders.component';
import { InvoicesComponent } from './orders/invoices/invoices.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component'


export const MODULE_ROUTES: Route[] = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'addproduct', component: AddProductComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'editproduct', component: EditProductComponent },
    { path: 'manageorders', component: ManageOrdersComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'support', component: SupportComponent },

]

export const MODULE_COMPONENTS = [
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    InvoicesComponent,
    ManageOrdersComponent,
    SupportComponent,
    ProfileComponent
]
