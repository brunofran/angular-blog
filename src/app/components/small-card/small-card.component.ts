import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  Id:string=""
  @Input()
  smallCardImg:string=""
  @Input()
  smallCardImgAlt:string=""
  @Input()
  smallCardCategory:string=""
  @Input()
  smallCardDescription:string=""
  @Input()
  smallCardDate:string=""

}
