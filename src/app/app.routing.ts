import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OccupancyComponent} from './Report/occupancy/occupancy.component';
import {StockComponent} from './Report/stock/stock.component';

const appRoutes: Routes = [
{ path: 'occupancy', component:OccupancyComponent},
{ path: 'stock', component:StockComponent}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
