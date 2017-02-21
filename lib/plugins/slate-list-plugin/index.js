'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderedListButton = exports.UnorderedListButton = exports.ListButtonBar = exports.ListUtils = exports.ListKeyboardShortcut = exports.ListNode = exports.ListSchema = exports.ListPlugin = undefined;

var _ListSchema = require('./ListSchema');

var _ListSchema2 = _interopRequireDefault(_ListSchema);

var _ListNode = require('./ListNode');

var _ListNode2 = _interopRequireDefault(_ListNode);

var _ListKeyboardShortcut = require('./ListKeyboardShortcut');

var _ListKeyboardShortcut2 = _interopRequireDefault(_ListKeyboardShortcut);

var _ListUtils = require('./ListUtils');

var ListUtils = _interopRequireWildcard(_ListUtils);

var _ListButtonBar = require('./ListButtonBar');

var _ListButtonBar2 = _interopRequireDefault(_ListButtonBar);

var _UnorderedListButton = require('./UnorderedListButton');

var _UnorderedListButton2 = _interopRequireDefault(_UnorderedListButton);

var _OrderedListButton = require('./OrderedListButton');

var _OrderedListButton2 = _interopRequireDefault(_OrderedListButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
var ListPlugin = function ListPlugin(options) {
  return {
    schema: _ListSchema2.default,

    onKeyDown: function onKeyDown() {
      return _ListKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//
exports.ListPlugin = ListPlugin;
exports.ListSchema = _ListSchema2.default;
exports.ListNode = _ListNode2.default;
exports.ListKeyboardShortcut = _ListKeyboardShortcut2.default;
exports.ListUtils = ListUtils;
exports.ListButtonBar = _ListButtonBar2.default;
exports.UnorderedListButton = _UnorderedListButton2.default;
exports.OrderedListButton = _OrderedListButton2.default;