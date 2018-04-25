import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  urlParam1: string;	
  urlParam2: string;
  queryParam1: string;
  optionalParam1: string;  
  routeData: any;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
  	this.urlParam1 = this.route.snapshot.paramMap.get('urlParam1');
  	this.urlParam2 = this.route.snapshot.paramMap.get('urlParam2');

	this.optionalParam1 = this.route.snapshot.paramMap.get('optionalParam1');

  	this.queryParam1 = this.route.snapshot.queryParamMap.get('queryParam1');

  	this.route.data.subscribe( d => this.routeData = d);
  }

}
