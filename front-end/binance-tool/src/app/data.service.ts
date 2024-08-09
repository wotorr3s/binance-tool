import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  prices: any = [];
  // stockOptions: any = {
  //   maintainAspectRatio: false,
  //   aspectRatio: 0.6,
  //   plugins: {
  //     legend: {
  //     }
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         drawBorder: false
  //       }
  //     },
  //     y: {
  //       grid: {
  //         drawBorder: false
  //       }
  //     }
  //   }
  // };
  // stockData: any = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'First Dataset',
  //       data: [64000],
  //       fill: false,
  //       tension: 0.4
  //     },
  //   ]
  // }

  openedPositions: any = [
    { symbol: 'BTCUSDT', buyPrice: 64000, quantity: 1, value: 0, change: 0, currentPrice: 0 },
    { symbol: 'ETHUSDT', buyPrice: 2500, quantity: 0.05, value: 0, change: 0, currentPrice: 0 },
    { symbol: 'BNBUSDT', buyPrice: 500, quantity: 0.1, value: 0, change: 0, currentPrice: 0 },
  ];
  constructor(private httpClient: HttpClient) {
  }
  getData() {
    setInterval(() => {
      this.httpClient.get('http://localhost:3000').subscribe((data: any) => {
        this.prices = data;
        return data;
      });
      for (var i = 0; i < this.openedPositions.length; i++) {
        for (var j = 0; j < this.prices.length; j++) {
          if (this.openedPositions[i].symbol === this.prices[j].symbol) {
            this.openedPositions[i].currentPrice = this.prices[j].price;
            this.openedPositions[i].value = this.prices[j].price * this.openedPositions[i].quantity;
            this.openedPositions[i].change = this.openedPositions[i].value - (this.openedPositions[i].buyPrice * this.openedPositions[i].quantity);
          }
        }
      }
    }, 2500);
  }
}
