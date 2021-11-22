import { Component, OnInit, Input } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Task } from './../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 0,
    text: 'your task here',
    day: '01 january 2021',
    reminder: false,
  };

  faTimes: IconDefinition = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
