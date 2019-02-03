import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelonixstaffService {

  constructor(private http: HttpClient) { }

  insertStaff(name: string, dob: string, bank: string, phone: string, duty: string, room: string, status: string){
    return this.http.get('/api/insertStaff/' + name + "/" + dob +  "/" + bank +  "/" + phone +  "/" + duty +  "/" + room +  "/" + status +  "/")
  }

  getStaff(){
    return this.http.get('/api/staff');
  }
}
