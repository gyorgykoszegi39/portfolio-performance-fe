import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { Filter } from '../../app.component';

@Component({
  selector: 'app-portfolio-value',
  templateUrl: './portfolio-value.component.html',
  styleUrls: ['./portfolio-value.component.scss']
})
export class PortfolioValueComponent implements OnChanges {
  @Input() filter!: Filter;

  posValEtfBlobUrl: SafeUrl = "";
  posValBlobUrl: SafeUrl = "";
  cashFlowBlobUrl: SafeUrl = "";
  combinedCashPosValBlobUrl: SafeUrl = "";

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadPortfolioValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.loadPortfolioValue();
    }
  }

  loadPortfolioValue(): void {
    this.dataService.fetchPositionsValuePerETF(this.filter)
      .subscribe({
        next: blob => {
          const objectUrl = URL.createObjectURL(blob);
          this.posValEtfBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        },
        error: error => {
          console.error('Error fetching image:', error);
        }
      });

    this.dataService.fetchPositionsValue(this.filter)
      .subscribe({
        next: blob => {
          const objectUrl = URL.createObjectURL(blob);
          this.posValBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        },
        error: error => {
          console.error('Error fetching image:', error);
        }
      });

    this.dataService.fetchCashFlow(this.filter)
      .subscribe({
        next: blob => {
          const objectUrl = URL.createObjectURL(blob);
          this.cashFlowBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        },
        error: error => {
          console.error('Error fetching image:', error);
        }
      });

    this.dataService.fetchCombinedCashFlowPositionsValue(this.filter)
      .subscribe({
        next: blob => {
          const objectUrl = URL.createObjectURL(blob);
          this.combinedCashPosValBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        },
        error: error => {
          console.error('Error fetching image:', error);
        }
      });
  }
}
