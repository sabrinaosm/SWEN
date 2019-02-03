import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DataComponent} from './data/data.component';
import {StockComponent} from './stock/stock.component';

const appRoutes: Routes = [
{ path: 'data', component:DataComponent},
{ path: 'stock', component:StockComponent}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);