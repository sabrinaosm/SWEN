import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransportService } from '../transport.service';

@Component({
  selector: 'app-newtransport',
  templateUrl: './newtransport.component.html',
  styleUrls: ['./newtransport.component.css']
})
export class NewtransportComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private transportService: TransportService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      booking: '',
      name: '',
      time: '',
      date: '',
      location: '',
      driver: '',
      license: '',
      status: ''
    });
  }

  onSubmit() {
    this.transportService.newBooking(this.myForm.value.booking,
      this.myForm.value.name, this.myForm.value.time, this.myForm.value.date,
      this.myForm.value.location, this.myForm.value.driver,
      this.myForm.value.license, this.myForm.value.status).subscribe();
    this.router.navigateByUrl('/transport');
  }

  goBack() {
    window.history.back();
  }

}
