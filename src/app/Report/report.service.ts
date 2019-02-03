import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------OCCUPANCY REPORT------------------------------------------------
  getAllOccupancy() {
    return this.http.get<any[]>('./api/occupancy');
  }

  regData(month: string, year: number, standard: number, deluxe: number, twinBed: number, family: number, superior: number, booked: number, occupancy: number, revenue: number) {
    return this.http.get('/api/regdata/' + month + '/' + year + '/' + standard + '/' + deluxe + '/' + twinBed + '/' + family + '/' + superior + '/' + booked + '/' + occupancy + '/' + revenue);
  }

  // ----------------------------------------------------STOCK AND INVENTORY REPORT --------------------------------------
  getAllInventory() {
    return this.http.get<any[]>('./api/inventory');
  }

  regItem(stockID: number, category: string, item: string, stock: number, replenish: string) {
    return this.http.get('/api/regitem/' + stockID + '/' + category + '/' + item + '/' + stock + '/' + replenish );
  }
  
  //-------------------------------------------------------------------------------------------------------------------------
}
