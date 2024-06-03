import { Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface PerformanceData {
  date: string;
  usdValue: number;
  percentageValue: number;
}

interface Data {
  [key: string]: {
    'USD value': number;
    '% value': number;
  }
}

@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.scss']
})
export class PerformanceTableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() data: Data = {};
  displayedColumns: string[] = ['date', 'usdValue', 'percentageValue'];
  dataSource = new MatTableDataSource<PerformanceData>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.loadPerformanceDataSource();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadPerformanceDataSource(): void {
    if (Object.keys(this.data).length == 0)
      return;

    const performanceData: PerformanceData[] = Object.keys(this.data).slice(1).map(key => ({
      date: key,
      usdValue: this.data[key]['USD value'],
      percentageValue: this.data[key]['% value']
    }));

    this.dataSource.data = performanceData;

  }
}
