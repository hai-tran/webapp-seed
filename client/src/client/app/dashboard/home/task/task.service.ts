import { Injectable } from '@angular/core';

import { RestClient } from '../../../shared/index';

export interface ITask {
  id: string;
  name: string;
  description: string;
}

@Injectable()
export class TaskService {
  constructor(private restClient: RestClient) {
  }

  createTask(task: ITask): Promise<ITask> {
    return this.restClient.authPost('tasks', task);
  }

  getTasks(): Promise<ITask[]> {
    return this.restClient.authGet('tasks');
  }

  updateTask(task: ITask): Promise<void> {
    return this.restClient.authPut('tasks/' + task.id, task);
  }

  removeTask(task: ITask): Promise<void> {
    return this.restClient.authDelete('tasks/' + task.id);
  }
}
