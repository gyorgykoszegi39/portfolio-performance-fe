import { Component, Input } from '@angular/core';
import { Filter } from '../../app.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  @Input() filter!: Filter;
}
