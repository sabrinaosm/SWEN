import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROOT
import { AppComponent } from './app.component';

// HOUSEKEEPING COMPONENTS
import { StaffComponent } from './Housekeeping/staff/staff.component';
import { HomeComponent } from './Housekeeping/home/home.component';

// REPORT COMPONENTS
import { OccupancyComponent } from './Report/occupancy/occupancy.component';
import { StockComponent } from './Report/stock/stock.component';

// TRANSPORT COMPONENTS
import { TransportComponent } from './Transport/transport/transport.component';
import { NewtransportComponent } from './Transport/newtransport/newtransport.component';

// ADDITIONAL MODULES
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// SERVICES
import { ReportService} from './Report/report.service';
import { DelonixstaffService } from './delonixstaff.service';

// PIPES
import { StaffPipe } from '.Pipes/Housekeeping/staff.pipe';
import { YearPipe } from './Pipes/Report/year.pipe';
import { MonthPipe} from './Pipes/Report/month.pipe';
import { ItemPipe } from './Pipes/Report/item.pipe';
import { CategoryPipe } from './Pipes/Report/category.pipe';
import { BookingPipe } from './Pipes/Transport/booking.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    HomeComponent,
    OccupancyComponent,
    StockComponent,
    StaffPipe,
    YearPipe,
    MonthPipe,
    ItemPipe,
    CategoryPipe,
    BookingPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [DelonixstaffService, ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
