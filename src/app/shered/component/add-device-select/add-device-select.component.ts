import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-device-select',
  standalone: true,
  imports: [],
  templateUrl: './add-device-select.component.html',
  styleUrl: './add-device-select.component.css'
})
export class AddDeviceSelectComponent {

 @Input() name?:string;
 @Input() value?:string;

}
