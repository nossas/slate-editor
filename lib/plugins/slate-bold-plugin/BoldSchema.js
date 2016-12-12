'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BoldNode = require('./BoldNode');

var _BoldNode2 = _interopRequireDefault(_BoldNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoldSchema = {
  marks: {
    bold: _BoldNode2.default
  }
};

exports.default = BoldSchema;