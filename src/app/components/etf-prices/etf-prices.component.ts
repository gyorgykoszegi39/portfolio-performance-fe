import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';
import { Filter } from '../../app.component';

@Component({
  selector: 'app-etf-prices',
  templateUrl: './etf-prices.component.html',
  styleUrls: ['./etf-prices.component.scss']
})
export class EtfPricesComponent implements OnChanges {
  @Input() filter!: Filter;

  etfPricesBlobUrl: SafeUrl = "";
  
  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.loadETFPrices();
    }
  }

  loadETFPrices(): void {
    this.dataService.fetchETFprices(this.filter)
      .subscribe({
        next: blob => {
          const objectUrl = URL.createObjectURL(blob);
          this.etfPricesBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        },
        error: error => {
          console.error('Error fetching image:', error);
        }
      });
  }
}
