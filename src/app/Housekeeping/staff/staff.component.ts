import { Component, OnInit } from '@angular/core';
import { DelonixstaffService } from '../delonixstaff.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private delonixstaffService: DelonixstaffService,
    private router: Router) { 
    }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      dob:'',
      bank:'',
      phone:'',
      duty:'',
      room:'',
      status:''
    });
  }
  onSubmit(){
    this.delonixstaffService.insertStaff(this.myForm.value.name,this.myForm.value.dob,this.myForm.value.bank,this.myForm.value.phone,this.myForm.value.duty,
      this.myForm.value.room,this.myForm.value.status).subscribe();
      this.router.navigateByUrl('/home');
  }

}
