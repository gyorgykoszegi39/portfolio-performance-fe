import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Filter } from '../../app.component';

@Component({
  selector: 'app-portfolio-performance',
  templateUrl: './portfolio-performance.component.html',
  styleUrls: ['./portfolio-performance.component.scss']
})
export class PortfolioPerformanceComponent implements OnChanges {
  @Input() filter!: Filter;

  monthlyPerformance: any;
  annuallyPerformance: any;

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.loadPortfolioPerformance();
    }
  }

  loadPortfolioPerformance(): void {
    this.dataService.fetchMonthlyPortfolioPerformance(this.filter)
      .subscribe({
        next: content => {
          this.monthlyPerformance = content;
        },
        error: error => {
          console.error('Error fetching Monthly Portfolio Performance:', error);
        }
      });

    this.dataService.fetchAnnuallyPortfolioPerformance(this.filter)
      .subscribe({
        next: content => {
          this.annuallyPerformance = content
        },
        error: error => {
          console.error('Error fetching Annually PortfolioPer formance:', error);
        }
      });
  }

}
