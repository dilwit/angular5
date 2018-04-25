import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first angular 5 app';

  constructor(private router: Router) {

  }

  navigateToDo() {
  	this.router.navigate(['/todo']);
  }

  contactUsWithDefaultRouteData() {
    this.router.navigate(['/contactUs']);     
  }

  contactUsWithRequiredUrlParamsAndDefaultRouteData() {
    this.router.navigate(['/contactUs', 'showMeYourOfficeAddress', 'new']);     
  }  

  contactUsWithQueryParams() {
    this.router.navigate(['/contactUs'], {queryParams: {queryParam1: 'queryParamData'}});
  }

  contactUsWithOptionalParams() {
    this.router.navigate(['/contactUs', {optionalParam1: 'optionalParamData'}]);
  }

  contactUsWithOverridingDefaultRouteData() {
    /*this.router.navigate(['/contactUs'], {data: {param1: 'overridden1', param2: 'overridden2'}});*/
  } 
  
}
