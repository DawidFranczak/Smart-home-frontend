import { Component, OnInit } from '@angular/core';

import { URLS } from '../../constant/urls'
import { TAquarium } from '../../../shered/types/TAquarium';

import { BackArrowComponent } from '../../../shered/component/back-arrow/back-arrow.component';

import { Auth } from '../../services/auth/auth';
import { fetchData } from '../../services/api/fetchData';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-aquarium',
  standalone: true,
  imports: [BackArrowComponent, RouterLink],
  templateUrl: './select-aquarium.component.html',
  styleUrl: './select-aquarium.component.css'
})
export class SelectAquariumComponent implements OnInit {

  allAquarium? :TAquarium[];

  constructor(
    private auth:Auth,
    private fetch:fetchData,
    private router:Router
  ){}

  ngOnInit(): void {
      this.auth.checkToken();
      this.fetch.fetchGet(URLS.getAllAquarium).subscribe({
        next:(data) => this.allAquarium=data as TAquarium[],
        error:(error) => console.log(error),
      })
  }
}
