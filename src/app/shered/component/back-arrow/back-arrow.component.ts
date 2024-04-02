import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { iconPatch } from '../../../core/constant/icons';

@Component({
  selector: 'app-back-arrow',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-arrow.component.html',
  styleUrl: './back-arrow.component.css'
})
export class BackArrowComponent {

@Input() path?:string

icon = iconPatch.backArrow

}
