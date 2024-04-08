import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {

  constructor(
    private router:Router
  ){}

  @Input() type:string = "button";
  @Input() id?:string | number;
  @Input() name?:string;
  @Input() style?:string;
  @Input() extraClass?:string;
  @Input() value?:string;

  showInfo(){
    // setTimeout(()=>{
    //   this.router.navigate(["/devices/",this.id,this.text])
    // },500)
  }
}
