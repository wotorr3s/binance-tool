import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrl: './stock-view.component.scss'
})
export class StockViewComponent {
  // chart: any = document.getElementById('stockChart');
  constructor(public dataService: DataService) {
    this.dataService.getData();
  }
  ngOnInit() {
  }

}
