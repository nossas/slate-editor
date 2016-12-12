'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ItalicMark = require('./ItalicMark');

var _ItalicMark2 = _interopRequireDefault(_ItalicMark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItalicSchema = {
  marks: {
    italic: _ItalicMark2.default
  }
};

exports.default = ItalicSchema;