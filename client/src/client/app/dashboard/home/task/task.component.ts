import { Component, OnInit } from '@angular/core';
import { ITask, TaskService } from './task.service';

/**
 * This class represents the lazy loaded TaskComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'task-cmp',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
})

export class TaskComponent implements OnInit {
  newTask: ITask = {
    id: '',
    name: '',
    description: ''
  };
  updatingTask: ITask = null;
  updatingIndex: number;
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().then(tasks => {
      this.tasks = tasks;
    }).catch(error => {
      console.log('Error ', error);
    });
  }

  createTask() {
    this.taskService.createTask(this.newTask).then(task => {
      this.tasks.push(task);
      this.updatingTask = null;
    }).catch(error => {
      console.log('Error ', error);
    });
  }

  onUpdateTaskClicked(task: ITask, index: number) {
    this.updatingTask = Object.assign({}, task);
    this.updatingIndex = index;
  }

  updateTask() {
    this.taskService.updateTask(this.updatingTask).then(() => {
      this.tasks[this.updatingIndex] = this.updatingTask;
      this.updatingTask = null;
    }).catch(error => {
      console.log('Error ', error);
    });
  }

  removeTask(task: ITask, index: number) {
    this.taskService.removeTask(task).then(() => {
      this.tasks.splice(index, 1);
      this.updatingTask = null;
    }).catch(error => {
      console.log('Error ', error);
    });
  }
}
