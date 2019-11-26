'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require('./api/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hapi = require('@hapi/hapi');

exports.default = async function (port) {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  const api = (0, _router2.default)({ server });
  await server.start();
  console.log('Server running on %s', server.info.uri);
};