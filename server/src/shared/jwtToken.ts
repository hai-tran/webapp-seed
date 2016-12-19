import * as Jwt from 'jsonwebtoken';

import { ServerConfigurations } from './configurations';
import { IUser, User } from '../models';

class JwtTokenUtility {
  public generateToken(user: IUser): string {
    const jwtSecret: any = ServerConfigurations.jwtSecret;
    const jwtExpiration: any = ServerConfigurations.jwtExpiration;

    return Jwt.sign({ id: user.id }, jwtSecret, { expiresIn: jwtExpiration });
  }

  public getHapiAuthStrategyOptions(): any {
    return {
      key: ServerConfigurations.jwtSecret,
      validateFunc: this.validateUser,
      verifyOptions: { algorithms: ['HS256'] }
    };
  }

  // TODO: move this to the right place
  private validateUser(decoded: any, request: any, cb: any) {
    User.findById(decoded.id).then(user => {
      if (!user) {
        return cb(null, false);
      }
      return cb(null, true);
    });
  };
}

export const JwtToken: JwtTokenUtility = new JwtTokenUtility();
