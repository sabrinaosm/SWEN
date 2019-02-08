import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) { }

  // get all tranport bookings
  getAllTransport() {
    return this.http.get<any[]>('./api/transport');
  }

  // create new transport booking
  newBooking(booking: string,
  name: string, 
  time: string, 
  date: string, 
  location: string, 
  driver: string, 
  license: string, 
  status: string) {
    return this.http.get('/api/newbooking/' + booking + '/' + name + '/' + time + '/' + date + '/' + location + '/' + driver + '/' + license + '/' + status);
  }
}
