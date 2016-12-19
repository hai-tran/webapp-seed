import { OpaqueToken } from '@angular/core';

export class UserCredential {
  public username: string;
  public password: string;
}

export class AuthExeception {
  constructor(private message: string) {
  }

  public toString(): string {
    return this.message;
  }
}

export let AuthenticationService = new OpaqueToken('IAuthService');

export interface IAuthService {
  isAuthenticated(): boolean;
  login(credential: UserCredential): Promise<any>;
  logout(): Promise<any>;
}
