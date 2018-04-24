import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {

	@Input() todo: any;

  	constructor() { }

  	ngOnInit() {
  	}

}
