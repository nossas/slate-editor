'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageNode = require('./ImageNode');

var _ImageNode2 = _interopRequireDefault(_ImageNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSchema = {
  nodes: {
    image: _ImageNode2.default
  }
};

exports.default = ImageSchema;