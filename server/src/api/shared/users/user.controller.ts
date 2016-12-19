import * as Boom from 'boom';
import * as Hapi from 'hapi';

import { BaseController, JwtToken } from '../../../shared';
import { User } from '../../../models';

export class UserController extends BaseController {
  constructor() {
    super('User not found');
  }

  public logout(request: Hapi.Request, reply: Hapi.IReply) {
    // TODO: make the token invalid
    reply(true);
  }

  public login(request: Hapi.Request, reply: Hapi.IReply) {
    const username = request.payload.username;
    const password = request.payload.password;

    User.findByUsername(username).then(user => {
      if (!user) {
        reply(Boom.unauthorized('Username or password is invalid.'));
      }

      // TODO: secure for password
      if (password !== user.password) {
        reply(Boom.unauthorized('Username or password is invalid.'));
      }

      const token = JwtToken.generateToken(user);
      reply({ token: token });
    }).catch(error => {
      reply(Boom.badImplementation(error));
    });
  }
}

export const userController: UserController = new UserController();
