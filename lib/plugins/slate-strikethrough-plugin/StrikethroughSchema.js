'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StrikethroughMark = require('./StrikethroughMark');

var _StrikethroughMark2 = _interopRequireDefault(_StrikethroughMark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StrikethroughSchema = {
  marks: {
    strikethrough: _StrikethroughMark2.default
  }
};

exports.default = StrikethroughSchema;