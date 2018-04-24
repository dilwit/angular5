import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  // One way data-binding
  placeHolderText: string = "Go to gym tomorrow...";
  submitText: string = "Add Item";
  toDoList: any = [];

  // Two way data-binding
  toDoItem: any = {
    id: null,
    name: null
  };

  constructor() { }

  ngOnInit() {
  }

  addItem() {
  	if(!this.toDoItem || !this.toDoItem.name)
  		return;
  	
  	this.toDoList.push(this.toDoItem);
  	this.toDoItem = {
      id: null,
      name: null
    };
  }

}
