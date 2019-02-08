import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TransportService } from '../transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  transport: any = [];

  @Output()
  change = new EventEmitter();

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    // retrieve all transport
    this.transportService.getAllTransport().subscribe(transport => {
      this.transport = transport;
    });

  }
}
