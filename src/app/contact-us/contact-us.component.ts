import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  type: string;	

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
  	this.route.params.subscribe(res => this.type = res.type);
  }

}
