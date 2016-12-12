'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkSchema = {
  nodes: {
    link: _LinkNode2.default
  }
};
exports.default = LinkSchema;