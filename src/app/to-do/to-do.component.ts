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
  toDoList: string = [];

  // Two way data-binding
  toDoItem: string;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
  	this.toDoList.push(this.toDoItem);
  	this.toDoItem = null;
  }

}
