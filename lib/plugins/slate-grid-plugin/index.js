'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridSplitRowButton = exports.GridButton = exports.GridButtonBar = exports.GridUtils = exports.GridKeyboardShortcut = exports.GridCellNode = exports.GridRowNode = exports.GridNode = exports.GridSchema = undefined;

var _GridSchema = require('./GridSchema');

var _GridSchema2 = _interopRequireDefault(_GridSchema);

var _GridNode = require('./GridNode');

var _GridNode2 = _interopRequireDefault(_GridNode);

var _GridRowNode = require('./GridRowNode');

var _GridRowNode2 = _interopRequireDefault(_GridRowNode);

var _GridCellNode = require('./GridCellNode');

var _GridCellNode2 = _interopRequireDefault(_GridCellNode);

var _GridKeyboardShortcut = require('./GridKeyboardShortcut');

var _GridKeyboardShortcut2 = _interopRequireDefault(_GridKeyboardShortcut);

var _GridUtils = require('./GridUtils');

var _GridUtils2 = _interopRequireDefault(_GridUtils);

var _GridButtonBar = require('./GridButtonBar');

var _GridButtonBar2 = _interopRequireDefault(_GridButtonBar);

var _GridButton = require('./GridButton');

var _GridButton2 = _interopRequireDefault(_GridButton);

var _GridSplitRowButton = require('./GridSplitRowButton');

var _GridSplitRowButton2 = _interopRequireDefault(_GridSplitRowButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
exports.default = function (options) {
  return {
    schema: _GridSchema2.default,

    onKeyDown: function onKeyDown() {
      return _GridKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//


exports.GridSchema = _GridSchema2.default;
exports.GridNode = _GridNode2.default;
exports.GridRowNode = _GridRowNode2.default;
exports.GridCellNode = _GridCellNode2.default;
exports.GridKeyboardShortcut = _GridKeyboardShortcut2.default;
exports.GridUtils = _GridUtils2.default;
exports.GridButtonBar = _GridButtonBar2.default;
exports.GridButton = _GridButton2.default;
exports.GridSplitRowButton = _GridSplitRowButton2.default;