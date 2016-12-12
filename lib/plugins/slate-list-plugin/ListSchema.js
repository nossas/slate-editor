'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UnorderedListNode = require('./UnorderedListNode');

var _UnorderedListNode2 = _interopRequireDefault(_UnorderedListNode);

var _OrderedListNode = require('./OrderedListNode');

var _OrderedListNode2 = _interopRequireDefault(_OrderedListNode);

var _ListItemNode = require('./ListItemNode');

var _ListItemNode2 = _interopRequireDefault(_ListItemNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSchema = {
  nodes: {
    'unordered-list': _UnorderedListNode2.default,
    'list-item': _ListItemNode2.default,
    'ordered-list': _OrderedListNode2.default
  }
};

exports.default = ListSchema;