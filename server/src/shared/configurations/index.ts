import * as nconf from 'nconf';
import * as path from 'path';

//Read Configurations
const configs = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(__dirname, './config.json')
  }
});

export interface IServerConfigurations {
  port: number;
  plugins: Array<string>;
  jwtSecret: string;
  jwtExpiration: string;
  staticFolders: Array<string>;
}

export interface IDatabaseConfiguration {
  connectionString: string;
}

function getDatabaseConfig(): IDatabaseConfiguration {
  return configs.get('database');
}

function getServerConfigs(): IServerConfigurations {
  return configs.get('server');
}

export const DatabaseConfigurations: IDatabaseConfiguration = getDatabaseConfig();
export const ServerConfigurations: IServerConfigurations = getServerConfigs();
