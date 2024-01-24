import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {
 @Input()
 blogTitle:string =""
 @Input()
 blogDescription:string =""
}
