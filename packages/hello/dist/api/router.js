'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouterApi;

var _handlers = require('./handlers');

function RouterApi(opts) {
  const server = opts.server;
  server.route({
    method: 'GET',
    path: '/',
    handler: _handlers.infoGet
  });

  server.route({
    method: 'GET',
    path: '/info',
    handler: _handlers.infoGet
  });

  server.route({
    method: 'POST',
    path: '/info',
    handler: _handlers.infoPost
  });
}