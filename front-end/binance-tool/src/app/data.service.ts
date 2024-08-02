import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  btcPrice: any;
  constructor(private httpClient: HttpClient) {
  }
  getData() {
    setInterval(() => {
      this.httpClient.get('http://localhost:3000').subscribe((data: any) => {
        this.btcPrice = data;
        return data;
      });
    }, 1000);
  }
}
