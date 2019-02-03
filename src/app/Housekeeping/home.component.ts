import { Component, OnInit } from '@angular/core';
import { DelonixstaffService } from '../Housekeeping/delonixstaff.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './Housekeeping/home.component.html',
  styleUrls: ['./Housekeeping/home.component.css']
})
export class HomeComponent implements OnInit {
  
  myForm: FormGroup;
  staff: any = [];

  constructor(private fb: FormBuilder, private delonixstaffService: DelonixstaffService,
    private router: Router) { 
      this.delonixstaffService.getStaff().subscribe(staff => {
        this.staff = staff;
      });
    }

  ngOnInit() {    
  }
  onSubmit(){
  }

}
