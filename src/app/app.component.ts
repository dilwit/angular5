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
  	this.router.navigate(['todo']);
  }

  navigateContactUs() {
  	this.router.navigate(['/contactUs', 'showMeYourOfficeAddress']);
  }
}
