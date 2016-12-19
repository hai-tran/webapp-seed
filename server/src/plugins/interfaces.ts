import * as Hapi from 'hapi';

import { IServerConfigurations } from '../shared';

export interface IPluginOptions {
  serverConfigs: IServerConfigurations;
}

export interface IPlugin {
  register(server: Hapi.Server, options?: IPluginOptions): void;
  info(): IPluginInfo;
}

export interface IPluginInfo {
  name: string;
  version: string;
}
