'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlignmentNode = require('./AlignmentNode');

var _AlignmentNode2 = _interopRequireDefault(_AlignmentNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignmentSchema = {
  nodes: {
    alignment: _AlignmentNode2.default
  }
};

exports.default = AlignmentSchema;