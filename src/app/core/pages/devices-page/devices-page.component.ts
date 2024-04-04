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


@Component({
  selector: 'app-devices-page',
  standalone: true,
  imports: [BackArrowComponent, ButtonComponent, SearchComponent,RouterLink],
  templateUrl: './devices-page.component.html',
  styleUrl: './devices-page.component.css'
})
export class DevicesPageComponent implements OnInit {
  fetchDevices?: Array<TDevice>;
  devices?: Array<TDevice>;
  icon = iconPatch.plus;

  constructor(
    private auth:Auth,
    private fetchData:fetchData,
  ){}

  ngOnInit(): void {
      this.auth.checkToken();
      this.fetchData.fetchGet(URLS.getAllDevices).subscribe({
        next:(data) => {this.fetchDevices = data as Array<TDevice>; this.devices= data as Array<TDevice> },
        error:(error) => console.log(error)
      })
  }

  getDevice(event:any){
    console.log(event.target.id)
  }

  searchDevice(event:any){
    const searchDeviceName = event.target.value.toLowerCase()
    this.devices= this.fetchDevices?.filter(device => device.name.toLowerCase().includes(searchDeviceName))
  }
}
