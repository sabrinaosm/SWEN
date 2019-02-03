import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  itemForm: FormGroup;
  edited = false;
  S_Data: any = [];

  constructor(private fb: FormBuilder, private reportService: ReportService, private router: Router) {
    this.reportService.getAllInventory().subscribe(S_Data => {
      this.S_Data = S_Data;
    });
   }

  ngOnInit() {
    this.itemForm = this.fb.group({
      stockID: '',
      category: '',
      item: '',
      stock: '',
      replenish: ''
    });
  }

  onSubmit() {
    this.reportService.regItem(this.itemForm.value.stockID, this.itemForm.value.category,
      this.itemForm.value.item, this.itemForm.value.stock, this.itemForm.value.replenish).subscribe();
    this.router.navigateByUrl('/stock');
  }

}

  // REFERENCE CODE
  /*
  onSubmit(){
    this.travelzService.postings(this.myForm.value.username, this.myForm.value.post).subscribe();
    this.router.navigateByUrl('/journal');
  }
  */
