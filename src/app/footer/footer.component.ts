import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string;
  numberOfClicks: number;

  constructor(private _data: DataService) { 

  }

  ngOnInit() {
  	this._data.version.subscribe(res => this.version = res);
  	this._data.numberOfClicks.subscribe(res => this.numberOfClicks = res);
  }

  performClick() {
  	this.numberOfClicks = this.numberOfClicks + 1;
  	this._data.updateClick(this.numberOfClicks);
  }

}
