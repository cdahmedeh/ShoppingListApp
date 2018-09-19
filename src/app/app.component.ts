import { Component } from '@angular/core';

import { GeocodeService } from './geocode.service';
import { GeocodeMapper } from './geocode.mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shopping List App';

  constructor() { }
}
