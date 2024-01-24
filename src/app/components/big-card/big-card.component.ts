import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  Id:string=""
  @Input()
  bigCardTitle:string=""
  @Input()
  bigCardDescription:string=""
  @Input()
  bigCardCategory:string=""
  @Input()
  bigCardImg:string=""
  @Input()
  bigCardImgAlt:string=""
}
