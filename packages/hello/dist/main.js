'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function () {
  (0, _2.default)(3001);
  process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
  });
}();