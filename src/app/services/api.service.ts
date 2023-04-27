import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  getLegentData() {
    return this.httpService.get("./assets/json/events.json");
  }

  getManufactureData(){
    return this.httpService.get("./assets/json/manufacturing-data.json");
  }
}
