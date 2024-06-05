import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Filter } from '../../app.component';

@Component({
  selector: 'app-risk-measures',
  templateUrl: './risk-measures.component.html',
  styleUrls: ['./risk-measures.component.scss']
})
export class RiskMeasuresComponent implements OnChanges {
  @Input() filter!: Filter;
  standardDeviation: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.standardDeviation = undefined;
      this.loadETFPrices();
    }
  }

  loadETFPrices(): void {
    this.dataService.fetchRiskMeasures(this.filter)
      .subscribe({
        next: content => {
          this.standardDeviation = content.standardDeviation
        },
        error: error => {
          console.error('Error fetching Risk Measures:', error);
        }
      });
  }
}
