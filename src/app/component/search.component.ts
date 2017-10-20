import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';
import { AgmMap } from '@agm/core';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [LoginService]
})
export class SearchComponent  {

  constructor(private LoginService: LoginService){
  //  this.getUserCredentials();
  }
private getUserCredentials(){
  debugger;
this.LoginService.getUserCredentials("","")
      .subscribe(queryResults => {
        debugger;
      });
    }

}