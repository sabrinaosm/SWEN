import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DelonixstaffService } from './delonixstaff.service';
import { StaffPipe } from './staff.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    HomeComponent,
    StaffPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [DelonixstaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
