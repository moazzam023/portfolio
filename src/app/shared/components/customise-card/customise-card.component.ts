import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customise-card',
  templateUrl: './customise-card.component.html',
  styleUrl: './customise-card.component.scss'
})
export class CustomiseCardComponent {

  @Input() config: any;

}
