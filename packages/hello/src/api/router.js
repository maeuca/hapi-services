import {infoPost, infoGet} from './handlers'
export default function RouterApi (opts) {
  const server = opts.server
  server.route({
    method: 'GET',
    path: '/',
    handler: infoGet
  })

  server.route({
    method: 'GET',
    path: '/info',
    handler: infoGet
  })

  server.route({
    method: 'POST',
    path: '/info',
    handler: infoPost
  })
}
