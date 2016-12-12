'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmbedNode = require('./EmbedNode');

var _EmbedNode2 = _interopRequireDefault(_EmbedNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmbedSchema = {
  nodes: {
    embed: _EmbedNode2.default
  }
};

exports.default = EmbedSchema;