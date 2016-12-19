import { AuthHttp, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Config } from '../config/index';
import { Storage } from '../appStorage';


export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => Storage.authToken),
  }), http);
}

@Injectable()
export class RestClient {
  private jsonHeaders: Headers = new Headers();

  constructor(private http: Http, private authHttp: AuthHttp) {
    this.jsonHeaders.append('Content-Type', 'application/json');
    this.jsonHeaders.append('Accept', 'application/json');
  }

  public get(routePath: string): Promise<any> {
    return this.http.get(this.getUrl(routePath), { headers: this.jsonHeaders })
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public authGet(routePath: string): Promise<any> {
    return this.authHttp.get(this.getUrl(routePath))
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public post(routePath: string, data: any): Promise<any> {
    let jsonData = JSON.stringify(data);
    return this.http.post(this.getUrl(routePath), jsonData, { headers: this.jsonHeaders })
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public authPost(routePath: string, data: any): Promise<any> {
    return this.authHttp.post(this.getUrl(routePath), data)
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public put(routePath: string, data: any): Promise<any> {
    let jsonData = JSON.stringify(data);
    return this.http.put(this.getUrl(routePath), jsonData, { headers: this.jsonHeaders })
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public authPut(routePath: string, data: any): Promise<any> {
    return this.authHttp.put(this.getUrl(routePath), data)
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public delete(routePath: string): Promise<any> {
    return this.http.delete(this.getUrl(routePath), { headers: this.jsonHeaders })
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  public authDelete(routePath: string): Promise<any> {
    return this.authHttp.delete(this.getUrl(routePath))
      .map(this.handleResponse)
      .catch(this.handleError)
      .toPromise();
  }

  private getUrl(routePath: string): string {
    return Config.API + routePath;
  }

  private handleResponse(res: any): any {
    return res.json() || {};
  }

  private handleError(err: any): any {
    return Observable.throw(err.json() || 'Server error');
  }
}
