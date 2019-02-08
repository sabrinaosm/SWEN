import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OccupancyComponent} from './Report/occupancy/occupancy.component';
import {StockComponent} from './Report/stock/stock.component';
import { HomeComponent } from './Housekeeping/home/home.component';
import { StaffComponent } from './Housekeeping/staff/staff.component';
import { TransportComponent } from './Transport/transport/transport.component';
import { NewtransportComponent } from './Transport/newtransport/newtransport.component';

const appRoutes: Routes = [
{ path: 'occupancy', component:OccupancyComponent},
{ path: 'stock', component:StockComponent},
{ path: 'home', component: HomeComponent },
{ path: 'staff', component: StaffComponent },
{ path: 'transport', component: TransportComponent },
{ path: 'newtransport', component: NewtransportComponent }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
