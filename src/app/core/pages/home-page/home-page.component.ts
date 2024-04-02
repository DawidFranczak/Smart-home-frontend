import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { iconPatch } from '../../constant/icons';

import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  icons = iconPatch


  constructor(
    private auth:Auth,
    private router:Router
  ){}

  ngOnInit(){
    this.auth.checkToken();
  }

  public navigate(event:any){
    let id:string = event.target.id;
    setTimeout(()=>{
      switch(id){
        case "aquarium":
          this.router.navigate(['/aquarium/all/']);
          break;
        case "lamps":
          this.router.navigate(['/lamps/all/']);
          break;
      }
    },500)
  }

}
