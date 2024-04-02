import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {

  @Input() iconPatch?:string;
  @Input() type:string="text";
  @Input() name?:string;
  @Input() placeholder?:string;
  @Input() inputmode?:string;
  @Input() viewBox:string='0 0 16 16';
  @Input() formControlName?:string;
  @Input() pattern?:string;
  @Input() errorMessage?:string;
  
  @Output() form = new EventEmitter<any>();

  sendValueUp(event:any){
    if(!this.pattern){
      this.form.emit(event);
      return
    }

    const regex = new RegExp(this.pattern)
    const inputValue = event.target.value;

    if(regex.test(event.target.value)){
        this.form.emit(event);
      return
    }
    event.target.value = inputValue.slice(0,-1)
  }
}
