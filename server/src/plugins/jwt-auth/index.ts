import * as Hapi from 'hapi';

import { IPlugin } from '../interfaces';
import { JwtToken } from '../../shared';

export default (): IPlugin => {
  return {
    register: (server: Hapi.Server) => {
      server.register({
        register: require('hapi-auth-jwt2')
      }, (error) => {
        if (error) {
          console.log('error', error);
        } else {
          server.auth.strategy('jwt', 'jwt', false,
            JwtToken.getHapiAuthStrategyOptions());
        }
      });
    },
    info: () => {
      return {
        name: 'JWT Authentication',
        version: '1.0.0'
      };
    }
  };
};
