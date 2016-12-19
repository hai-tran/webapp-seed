import * as UserValidator from './user.validator';
import { IControllerRoutesPair } from '../../../shared';
import { userController } from './user.controller';
import { jwtValidator } from '../../../shared';

export const UserRoutesPair: IControllerRoutesPair = {
  controller: userController,
  routes: [
    {
      method: 'POST',
      path: '/users/login',
      config: {
        handler: userController.login,
        tags: ['api', 'users'],
        description: 'Login a user.',
        validate: {
          payload: UserValidator.loginUserModel
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'User logged in.'
              }
            }
          }
        }
      }
    },
    {
      method: 'POST',
      path: '/users/logout',
      config: {
        handler: userController.logout,
        auth: 'jwt',
        tags: ['api', 'users'],
        description: 'Get user info.',
        validate: {
          headers: jwtValidator,
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              '200': {
                'description': 'User logged out.'
              }
            }
          }
        }
      }
    }
  ]
};
