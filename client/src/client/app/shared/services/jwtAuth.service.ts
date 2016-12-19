import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';
import { Injectable } from '@angular/core';

import { IAuthService, UserCredential } from './iauth.service';
import { RestClient } from './restClient.service';
import { Storage } from '../appStorage';

@Injectable()
export class JwtAuthService implements IAuthService {
  constructor(private restClient: RestClient) {
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired(null, Storage.authToken);
  }

  public login(credential: UserCredential): Promise<any> {
    return this.restClient.post('users/login', credential).then(res => {
      Storage.authToken = res.token;
    });
  }

  public logout(): Promise<any> {
    return this.restClient.authPost('users/logout', null).then(res => {
      Storage.authToken = null;
    });
  }
}
