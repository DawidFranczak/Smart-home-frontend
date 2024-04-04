import { Component, OnInit } from '@angular/core';

import { BackArrowComponent } from '../../../shered/component/back-arrow/back-arrow.component';
import { FormFieldComponent } from '../../../shered/component/form-field/form-field.component';
import { AddDeviceSelectComponent } from '../../../shered/component/add-device-select/add-device-select.component';
import { MessageComponent } from '../../../shered/component/message/message.component';

import { TAddDeviceRequest } from '../../../shered/types/TAddDeviceRequest';

import { Auth } from '../../services/auth/auth';
import { fetchData } from '../../services/api/fetchData';

import { URLS } from '../../constant/urls';
import e from 'express';
import { error } from 'console';

@Component({
  selector: 'app-add-device-page',
  standalone: true,
  imports: [BackArrowComponent, FormFieldComponent, AddDeviceSelectComponent, MessageComponent],
  templateUrl: './add-device-page.component.html',
  styleUrl: './add-device-page.component.css'
})
export class AddDevicePageComponent implements OnInit{

  messageType?:string;
  message?:string;
  isAdding:boolean = false;
  
  private body: TAddDeviceRequest = {
    name:"",
    type:""
  }

  constructor(
    private auth:Auth,
    private fetchData:fetchData

  ){}

  ngOnInit(): void {
      this.auth.checkToken();
  }

  getName(event:any): void {
    const name:string = event.target.value;
    if(name)
      this.body = {...this.body, name:name}
  }

  getType(event:any): void {
    if(event.target.tagName === "LABEL")
      return

    const deviceType:string = event.target.value;
    if(deviceType)
      this.body = {...this.body, type:deviceType}
  }

  sendRequest(): void{
    if(!this.body.name || !this.body.type)
      return

    this.isAdding = true;
    this.fetchData.fetchPost(URLS.addDevice,this.body).subscribe({
      next:() => {
        this.isAdding = false;
        this.messageType = "successful"
        this.message = "Urządznie dodano pomyślnie!"
      },
      error:(error)=> {
        this.isAdding = false
        this.messageType = "error"
        this.message = error.error.message;
        },
    })
  }
 
}
