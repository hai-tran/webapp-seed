import * as Server from './server';

console.log(`Running enviroment ${process.env.NODE_ENV || 'prod'}`);

//Starting Application Server
const server = Server.init();

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
