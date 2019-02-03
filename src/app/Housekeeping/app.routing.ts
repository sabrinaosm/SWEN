import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'staff', component: StaffComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)