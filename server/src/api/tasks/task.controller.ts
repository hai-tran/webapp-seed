import * as Boom from 'boom';
import * as Hapi from 'hapi';

import { BaseController } from '../../shared';
import { Task, ITask } from '../../models';

export class TaskController extends BaseController {
  constructor() {
    super('Task not found');
  }

  public getTaskById(request: Hapi.Request, reply: Hapi.IReply) {
    const id = request.params['id'];

    Task.findById(id).then(task => {
      if (!task) {
        reply(Boom.notFound('Task does not exist.'));
      }
      reply(task);
    }).catch(error => {
      reply(Boom.badImplementation(error));
    });
  }

  public getTasks(request: Hapi.Request, reply: Hapi.IReply) {
    Task.getTasks().then(tasks => {
      reply(tasks);
    }).catch(error => {
      reply(Boom.badImplementation(error));
    });
  }

  public createTask(request: Hapi.Request, reply: Hapi.IReply) {
    let task: ITask = {
      id: '',
      name: request.payload.name,
      description: request.payload.description
    };

    Task.addTask(task).then(task => {
      reply(task);
    }).catch(error => {
      reply(Boom.badData(error));
    });
  }

  public updateTask(request: Hapi.Request, reply: Hapi.IReply) {
    let task: ITask = {
      id: request.params['id'],
      name: request.payload.name,
      description: request.payload.description
    };

    Task.updateTask(task).then(task => {
      reply(task);
    }).catch(error => {
      reply(Boom.badData(error));
    });
  }

  public deleteTask(request: Hapi.Request, reply: Hapi.IReply) {
    const id = request.params['id'];

    Task.deleteTask(id).then(() => {
      reply(true);
    }).catch(error => {
      reply(Boom.badData(error));
    });
  }
}

export const taskController: TaskController = new TaskController();
