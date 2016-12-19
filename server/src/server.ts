import * as Hapi from 'hapi';

import { ApiRoutesPair } from './server.routes';
import { IPlugin } from './plugins/interfaces';
import { IServerConfigurations } from './shared';
import { ServerConfigurations } from './shared';

export function init() {
  const configs: IServerConfigurations = ServerConfigurations;
  const port = process.env.PORT || configs.port;
  const server: Hapi.Server = new Hapi.Server();

  server.connection({
    port: port,
    routes: {
      cors: true
    }
  });

  //  Setup Hapi Plugins
  const plugins: Array<string> = configs.plugins;
  const pluginOptions = {
    serverConfigs: configs
  };

  plugins.forEach((pluginName: string) => {
    var plugin: IPlugin = (require('./plugins/' + pluginName)).default();
    console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
    plugin.register(server, pluginOptions);
  });

  // Add routes for api
  // Api routes will be beginning with '/api';
  ApiRoutesPair.forEach(routesPair => {
    server.bind(routesPair.controller);
    routesPair.routes.forEach(route => {
      if (false === route.path.startsWith('/api')) {
        route.path = '/api' + route.path;
      }
      server.route(route);
    });
  });

  // Serve static files
  addStaticFileRoutes(server, configs);

  return server;
};

function addStaticFileRoutes(server: Hapi.Server, configs: IServerConfigurations) {
  let staticFolders: string[] = configs.staticFolders;
  staticFolders.forEach(folder => {
    server.route({
      method: 'GET',
      path: '/' + folder + '/{param*}',
      handler: {
        directory: {
          path: './public/' + folder,
          listing: false,
          index: true
        }
      }
    });
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function (request, reply) {
      reply.redirect('/');
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('public/index.html');
    },
    config: {
      plugins: { lout: false },
      description: 'Serve static files from ./public'
    }
  });
}
