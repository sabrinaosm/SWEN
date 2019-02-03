import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { DataService } from '../../data.service';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css']
})

export class OccupancyComponent implements OnInit {
  myForm: FormGroup;
  edited = false;
  O_Data: any = [];

  constructor(private fb: FormBuilder, private reportService: ReportService, private router: Router) {
    this.reportService.getAllOccupancy().subscribe(O_Data => {
      this.O_Data = O_Data;
    });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      month: '',
      year: '',
      standard: '',
      deluxe: '',
      twinBed: '',
      family: '',
      superior: '',
      booked: '',
      occupancy: '',
      revenue: ''
    });
  }

  onSubmit() {
    this.reportService.regData(this.myForm.value.month, this.myForm.value.year,
      this.myForm.value.standard, this.myForm.value.deluxe, this.myForm.value.twinBed, this.myForm.value.family, this.myForm.value.superior,
      this.myForm.value.booked, this.myForm.value.occupancy, this.myForm.value.revenue).subscribe();
    this.router.navigateByUrl('/data');
    this.edited = true;
  }

  // REFERENCE CODE
  /*
  onSubmit(){
    this.travelzService.postings(this.myForm.value.username, this.myForm.value.post).subscribe();
    this.router.navigateByUrl('/journal');
  }
  */

}
