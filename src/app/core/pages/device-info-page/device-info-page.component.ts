import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-info-page',
  standalone: true,
  imports: [],
  templateUrl: './device-info-page.component.html',
  styleUrl: './device-info-page.component.css'
})
export class DeviceInfoPageComponent implements OnInit{

  id?:number;
  name?:string;

  constructor(
    private auth:Auth,
    private router:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.auth.checkToken();
    this.router.params.subscribe((param)=>{
      this.id = param["id"];
      this.name = param["text"];
    })
  }
}
