import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter } from '../app.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  fetchETFprices(filter: Filter): Observable<Blob> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/etf-prices`, { params, responseType: 'blob' });
  }

  fetchPositionsValuePerETF(filter: Filter): Observable<Blob> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/positions-value-per-etf`, { params, responseType: 'blob' });
  }

  fetchPositionsValue(filter: Filter): Observable<Blob> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/positions-value`, { params, responseType: 'blob' });
  }

  fetchCashFlow(filter: Filter): Observable<Blob> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/cash-flow`, { params, responseType: 'blob' });
  }

  fetchCombinedCashFlowPositionsValue(filter: Filter): Observable<Blob> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/combined-cash-flow-positions-value`, { params, responseType: 'blob' });
  }

  fetchMonthlyPortfolioPerformance(filter: Filter): Observable<any> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/monthly-portfolio-performance`, { params });
  }

  fetchAnnuallyPortfolioPerformance(filter: Filter): Observable<any> {
    const params = this.getParams(filter);

    return this.http.get(`${this.baseUrl}/annually-portfolio-performance`, { params });
  }

  fetchRiskMeasures(filter: Filter): Observable<any> {
    const params =  new HttpParams().set('excludeETFs', JSON.stringify(filter.etfs.filter(etf => !etf.selected).map(etf => etf.name)));

    return this.http.get(`${this.baseUrl}/risk-measures`, { params });
  }

  getParams(filter: Filter) {
    return new HttpParams()
      .set('display_data_from', filter.startDate.toLocaleDateString('en-GB').replace(/\//g, '-'))
      .set('display_data_to', filter.endDate.toLocaleDateString('en-GB').replace(/\//g, '-'))
      .set('exclude_etfs', JSON.stringify(filter.etfs.filter(etf => !etf.selected).map(etf => etf.name)));
  }
}
