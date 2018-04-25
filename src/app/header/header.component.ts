import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	numberOfClicks: number;

  	constructor(private _data: DataService) { }

	ngOnInit() {
		this._data.numberOfClicks.subscribe(res => this.numberOfClicks = res);
	}
}
