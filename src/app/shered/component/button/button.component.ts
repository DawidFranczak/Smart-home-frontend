import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {

  @Input() type:string = "button";
  @Input() id?:string | number;
  @Input() text?:string;
  @Input() style?:string;
  @Input() extraClass?:string;

}
