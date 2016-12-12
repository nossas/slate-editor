'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnderlineMark = require('./UnderlineMark');

var _UnderlineMark2 = _interopRequireDefault(_UnderlineMark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnderlineSchema = {
  marks: {
    underline: _UnderlineMark2.default
  }
};

exports.default = UnderlineSchema;