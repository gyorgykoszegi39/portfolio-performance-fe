import { Component } from '@angular/core';

interface Selected {
  name: string,
  selected: boolean
}
export interface Filter {
  startDate: Date,
  endDate: Date,
  etfs: Selected[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filter: Filter = {
    startDate: new Date(2005, 0, 3),
    endDate: new Date(2024, 4, 29),
    etfs: [
      { name: 'IWM', selected: true },
      { name: 'SHY', selected: true },
      { name: 'SPY', selected: true },
      { name: 'TLT', selected: true },
      { name: 'XLB', selected: true },
      { name: 'XLE', selected: true },
      { name: 'XLF', selected: true },
      { name: 'XLI', selected: true },
      { name: 'XLK', selected: true },
      { name: 'XLP', selected: true },
      { name: 'XLU', selected: true },
      { name: 'XLV', selected: true },
      { name: 'XLY', selected: true }
    ]
  }

  applyFilter() {
    this.filter = { ...this.filter };
  }
}
