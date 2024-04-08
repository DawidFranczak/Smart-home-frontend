import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Auth } from '../../services/auth/auth';
import { fetchData } from '../../services/api/fetchData';

import { URLS } from '../../constant/urls';
import { iconPatch } from '../../constant/icons';

import { TDevice } from '../../../shered/types/TDevice';

import { ButtonComponent } from '../../../shered/component/button/button.component';
import { SearchComponent } from '../../../shered/component/search/search.component';
import { BackArrowComponent } from '../../../shered/component/back-arrow/back-arrow.component';
import { FormFieldComponent } from '../../../shered/component/form-field/form-field.component';
import { MessageComponent } from '../../../shered/component/message/message.component';
import { TAddDeviceRequest } from '../../../shered/types/TAddDeviceRequest';
import { error } from 'console';


@Component({
  selector: 'app-devices-page',
  standalone: true,
  imports: [BackArrowComponent, ButtonComponent, SearchComponent,RouterLink,FormFieldComponent, MessageComponent],
  templateUrl: './devices-page.component.html',
  styleUrl: './devices-page.component.css'
})
export class DevicesPageComponent implements OnInit {

  fetchDevices?: Array<TDevice>;
  devices?: Array<TDevice>;
  icon = iconPatch.plus;

  info:boolean=false;
  id?:number;
  name?:string;
  type?:string;
  newName?:string;
  message:string=" ";

  private body: TAddDeviceRequest = {
    name:"",
    type:""
  }

  constructor(
    private auth:Auth,
    private fetchData:fetchData,
  ){}

  ngOnInit(): void {
      this.auth.checkToken();
      this.fetchData.fetchGet(URLS.getAllDevices).subscribe({
        next:(data) => {this.fetchDevices = data as Array<TDevice>; this.devices= data as Array<TDevice>;},
        error:(error) => console.log(error)
      })
  }

  searchDevice(event:any): void{
    const searchDeviceName = event.target.value.toLowerCase()
    this.devices= this.fetchDevices?.filter(device => device.name.toLowerCase().includes(searchDeviceName))
  }

  getDevice(event:any):void {
    this.id = event.target.id;
    this.name = event.target.name;
    this.type = event.target.value;
    this.info = true;
  }

  setNewName(event:any):void{
    this.newName = event.target.value;
  }

  changeName(event:any):void {
    if(!this.newName || !this.type)
      return
    this.body ={
      name:this.newName,
      type: this.type
    }
    this.fetchData.fetchPut(URLS.updateDevice+this.id+'/',this.body).subscribe({
      next:() => {this.updateArray(); this.back()},
      error:(error) => this.message = error.error.message,
      complete:()=> this.message= " "
    })
  }

  updateArray():void{
    this.devices?.forEach((device,index) =>{
      if(device.id == this.id){
        if(this.newName)
          device.name = this.newName
        this.devices?.splice(index,1)
      }
    })
  }

  back():void{
    this.info=false;
    this.message=" ";
  }

  deleteDevice():void{
    this.fetchData.fetchDelete(URLS.deleteDevice+this.id+"/").subscribe({
      next:()=> {this.updateArray();this.back()},
      error:(error)=> {this.message = error.error;console.log(error)}
    })
  }

}
