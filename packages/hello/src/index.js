import routerApi from './api/router'
const Hapi = require('@hapi/hapi');

export default async function (port) {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  const api = routerApi({server})
  await server.start();
  console.log('Server running on %s', server.info.uri);

}