'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignmentRightButton = exports.AlignmentCenterButton = exports.AlignmentLeftButton = exports.AlignmentButtonBar = exports.AlignmentUtils = exports.AlignmentKeyboardShortcut = exports.AlignmentNode = exports.AlignmentSchema = undefined;

var _AlignmentSchema = require('./AlignmentSchema');

var _AlignmentSchema2 = _interopRequireDefault(_AlignmentSchema);

var _AlignmentNode = require('./AlignmentNode');

var _AlignmentNode2 = _interopRequireDefault(_AlignmentNode);

var _AlignmentKeyboardShortcut = require('./AlignmentKeyboardShortcut');

var _AlignmentKeyboardShortcut2 = _interopRequireDefault(_AlignmentKeyboardShortcut);

var _AlignmentUtils = require('./AlignmentUtils');

var _AlignmentUtils2 = _interopRequireDefault(_AlignmentUtils);

var _AlignmentButtonBar = require('./AlignmentButtonBar');

var _AlignmentButtonBar2 = _interopRequireDefault(_AlignmentButtonBar);

var _AlignmentLeftButton = require('./AlignmentLeftButton');

var _AlignmentLeftButton2 = _interopRequireDefault(_AlignmentLeftButton);

var _AlignmentCenterButton = require('./AlignmentCenterButton');

var _AlignmentCenterButton2 = _interopRequireDefault(_AlignmentCenterButton);

var _AlignmentRightButton = require('./AlignmentRightButton');

var _AlignmentRightButton2 = _interopRequireDefault(_AlignmentRightButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Keyboard
//
//
// Schema
//
exports.default = function (options) {
  return {
    schema: _AlignmentSchema2.default,

    onKeyDown: function onKeyDown() {
      return _AlignmentKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// External
//


exports.AlignmentSchema = _AlignmentSchema2.default;
exports.AlignmentNode = _AlignmentNode2.default;
exports.AlignmentKeyboardShortcut = _AlignmentKeyboardShortcut2.default;
exports.AlignmentUtils = _AlignmentUtils2.default;
exports.AlignmentButtonBar = _AlignmentButtonBar2.default;
exports.AlignmentLeftButton = _AlignmentLeftButton2.default;
exports.AlignmentCenterButton = _AlignmentCenterButton2.default;
exports.AlignmentRightButton = _AlignmentRightButton2.default;