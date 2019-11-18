import { Component } from '@angular/core';
import { fade } from '../animations/animations';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  animations: [
    fade
  ]
})
export class ToDoComponent {

  items: string[] = [
    'html',
    'java script',
    'angular',
    'laravel'
  ];

  constructor() { }

  addItem(item) {
    this.items.splice(0, 0, item.value);
    item.value= '';
  }
  removeItem(item){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
