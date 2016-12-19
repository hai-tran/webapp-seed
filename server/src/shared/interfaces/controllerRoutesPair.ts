import { IRouteConfiguration } from 'hapi';

import { BaseController } from './base.controller';

export interface IControllerRoutesPair {
  controller: BaseController;
  routes: IRouteConfiguration[];
}
