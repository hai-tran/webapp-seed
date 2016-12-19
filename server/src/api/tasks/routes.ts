import * as Joi from 'joi';

import * as TaskValidator from './task.validator';
import { IControllerRoutesPair } from '../../shared';
import { taskController } from './task.controller';
import { jwtValidator } from '../../shared';

export const TaskRoutesPair: IControllerRoutesPair = {
  controller: taskController,
  routes: [
    {
      method: 'GET',
      path: '/tasks/{id}',
      config: {
        handler: taskController.getTaskById,
        auth: 'jwt',
        tags: ['api', 'tasks'],
        description: 'Get task by id.',
        validate: {
          params: {
            id: Joi.string().required()
          },
          headers: jwtValidator
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'Task founded.'
              },
              '404': {
                'description': 'Task does not exist.'
              }
            }
          }
        }
      }
    },
    {
      method: 'GET',
      path: '/tasks',
      config: {
        handler: taskController.getTasks,
        auth: 'jwt',
        tags: ['api', 'tasks'],
        description: 'Get all tasks.',
        validate: {
          headers: jwtValidator
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'Tasks founded.'
              }
            }
          }
        }
      }
    },
    {
      method: 'POST',
      path: '/tasks',
      config: {
        handler: taskController.createTask,
        auth: 'jwt',
        tags: ['api', 'tasks'],
        description: 'Create a task.',
        validate: {
          payload: TaskValidator.createTaskModel,
          headers: jwtValidator
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'Task created.'
              }
            }
          }
        }
      }
    },
    {
      method: 'DELETE',
      path: '/tasks/{id}',
      config: {
        handler: taskController.deleteTask,
        auth: 'jwt',
        tags: ['api', 'tasks'],
        description: 'Create a task.',
        validate: {
          params: {
            id: Joi.string().required()
          },
          headers: jwtValidator
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'Task deleted.'
              },
              '404': {
                'description': 'Task does not exist.'
              }
            }
          }
        }
      }
    },
    {
      method: 'PUT',
      path: '/tasks/{id}',
      config: {
        handler: taskController.updateTask,
        auth: 'jwt',
        tags: ['api', 'tasks'],
        description: 'Update a task.',
        validate: {
          params: {
            id: Joi.string().required()
          },
          payload: TaskValidator.updateTaskModel,
          headers: jwtValidator
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'Task updated.'
              },
              '404': {
                'description': 'Task does not exist.'
              }
            }
          }
        }
      }
    }
  ]
};
