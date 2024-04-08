import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {URLS} from '../../constant/urls'

import { Auth } from '../../services/auth/auth';
import { fetchData } from '../../services/api/fetchData';

import { BackArrowComponent } from '../../../shered/component/back-arrow/back-arrow.component';
import { MessageComponent } from '../../../shered/component/message/message.component';
import { TAquariumSettings } from '../../../shered/types/TAquariumSettings';


@Component({
  selector: 'app-aquarium-page',
  standalone: true,
  imports: [BackArrowComponent, FormsModule, MessageComponent],
  templateUrl: './aquarium-page.component.html',
  styleUrl: './aquarium-page.component.css'
})
export class AquariumPageComponent implements OnInit{

  private id?:number;
  color:string="#ffffff";
  fluoMode?:boolean;
  fluoStart?:string;
  fluoStop?:string;
  ledMode?:boolean;
  ledStart?:string;
  ledStop?:string;
  mode?:boolean;
  name?:string;
  errorMessage?:string;

  constructor(
    private router:ActivatedRoute,
    private auth:Auth,
    private fetch:fetchData,
  ){}

  ngOnInit(): void {
    this.auth.checkToken();
    this.router.params.subscribe((param)=>{
      this.id = param["id"];
    })
    this.fetchAquariumSettings();
  }

  fetchAquariumSettings(): void{
    this.fetch.fetchGet(URLS.getAquarium+this.id+'/').subscribe({
      next: (data) => this.setAquariumInitialSettings(data as TAquariumSettings)
      })
  }

  changeColor(event:any){
    if(!this.ledMode){
      this.errorMessage="Ledy są wyłączone";
      return
    }
    const body = {
      color:event.target.value
    }

    this.sendUpdateSettingToServer(URLS.setAquariumColor+this.id+'/', body);
  }

  saveLedTime(){
    const body = {
      ledStart: this.ledStart,
      ledStop: this.ledStop
    }

    this.sendUpdateSettingToServer(URLS.setAquariumLedTime+this.id+'/', body);
  }

  saveFluoTime(){
    const body = {
      fluoStart: this.fluoStart,
      fluoStop: this.fluoStop
    }

    this.sendUpdateSettingToServer(URLS.setAquariumFluoTime+this.id+'/', body);
  }

  changeMode(){
    const body = {
      mode: !this.mode
    }
    this.sendUpdateSettingToServer(URLS.setAquariumMode+this.id+'/',body);
    this.mode = !this.errorMessage? !this.mode : this.mode;
    if(!this.mode)
      this.fetch.fetchGet(URLS.getAquarium+this.id+'/').subscribe({
        next: (data) => {
          this.ledMode= data.ledMode;
          this.fluoMode=data.fluoMode;
        }})
      
  }

  changeLedMode(){
    const body = {
      mode: !this.ledMode 
    }

    this.sendUpdateSettingToServer(URLS.setAquariumLedMode+this.id+'/',body);
    this.ledMode = !this.errorMessage? !this.ledMode : this.ledMode;

  }
  changeFluoMode(){
    const body = {
      mode: !this.fluoMode
    }
    this.sendUpdateSettingToServer(URLS.setAquariumFluoMode+this.id+'/',body);
    this.fluoMode = !this.errorMessage? !this.fluoMode : this.fluoMode;
  }

  private async sendUpdateSettingToServer(url:string, body:any){
    this.errorMessage='';
    this.fetch.fetchPut(url,body).subscribe({
      next:() => this.setErrorStatus(200),
      error:(error) => this.setErrorStatus(error.status)
    })
  }

  private setErrorStatus(status:number) : void{
    switch(status){
      case 0:
        this.errorMessage = "Serwer wyłączony";
        break;
      case 200:
        this.errorMessage = "";
        break;
      case 501:
        this.errorMessage = "Błąd w komunikacji";
        break;
    }
  }

  private setAquariumInitialSettings(settings:TAquariumSettings){
    this.mode = settings.mode;
    this.color = settings.color;
    this.fluoMode = settings.fluoMode;
    this.fluoStart = settings.fluoStart;
    this.fluoStop = settings.fluoStop;
    this.ledMode = settings.ledMode;
    this.ledStart = settings.ledStart;
    this.ledStop = settings.ledStop;
    this.name = settings.name;
  }

}
