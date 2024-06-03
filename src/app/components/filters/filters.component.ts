import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-filter',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FilterComponent {
  private _startDate: Date = new Date();
  private _endDate: Date = new Date();
  private _etfs: any[] = [];

  @Input()
  get startDate(): Date {
    return this._startDate;
  }
  set startDate(value: Date) {
    this._startDate = value;
    this.startDateChange.emit(this._startDate);
  }

  @Input()
  get endDate(): Date {
    return this._endDate;
  }
  set endDate(value: Date) {
    this._endDate = value;
    this.endDateChange.emit(this._endDate);
  }

  @Input()
  get etfs(): any[] {
    return this._etfs;
  }
  set etfs(value: any[]) {
    this._etfs = value;
    this.etfsChange.emit(this._etfs);
  }

  @Output() startDateChange = new EventEmitter<Date>();
  @Output() endDateChange = new EventEmitter<Date>();
  @Output() etfsChange = new EventEmitter<any[]>();
}
