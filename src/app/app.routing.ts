import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OccupancyComponent} from './Report/occupancy/occupancy.component';
import {StockComponent} from './Report/stock/stock.component';
import { HomeComponent } from './Housekeeping/home/home.component';
import { StaffComponent } from './Housekeeping/staff/staff.component';

const appRoutes: Routes = [
{ path: 'occupancy', component:OccupancyComponent},
{ path: 'stock', component:StockComponent},
{ path: 'home', component: HomeComponent },
{ path: 'staff', component: StaffComponent }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
