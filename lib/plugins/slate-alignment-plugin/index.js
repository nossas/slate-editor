'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignmentRightButton = exports.AlignmentCenterButton = exports.AlignmentLeftButton = exports.AlignmentButtonBar = exports.AlignmentUtils = exports.AlignmentKeyboardShortcut = exports.AlignmentNode = exports.AlignmentPlugin = undefined;

var _AlignmentNode = require('./AlignmentNode');

var _AlignmentNode2 = _interopRequireDefault(_AlignmentNode);

var _AlignmentKeyboardShortcut = require('./AlignmentKeyboardShortcut');

var _AlignmentKeyboardShortcut2 = _interopRequireDefault(_AlignmentKeyboardShortcut);

var _AlignmentUtils = require('./AlignmentUtils');

var AlignmentUtils = _interopRequireWildcard(_AlignmentUtils);

var _AlignmentButtonBar = require('./AlignmentButtonBar');

var _AlignmentButtonBar2 = _interopRequireDefault(_AlignmentButtonBar);

var _AlignmentLeftButton = require('./AlignmentLeftButton');

var _AlignmentLeftButton2 = _interopRequireDefault(_AlignmentLeftButton);

var _AlignmentCenterButton = require('./AlignmentCenterButton');

var _AlignmentCenterButton2 = _interopRequireDefault(_AlignmentCenterButton);

var _AlignmentRightButton = require('./AlignmentRightButton');

var _AlignmentRightButton2 = _interopRequireDefault(_AlignmentRightButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Keyboard
//
var AlignmentPlugin = function AlignmentPlugin(options) {
  return {
    onKeyDown: function onKeyDown() {
      return _AlignmentKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// External
//
//
// Rendering
//
exports.AlignmentPlugin = AlignmentPlugin;
exports.AlignmentNode = _AlignmentNode2.default;
exports.AlignmentKeyboardShortcut = _AlignmentKeyboardShortcut2.default;
exports.AlignmentUtils = AlignmentUtils;
exports.AlignmentButtonBar = _AlignmentButtonBar2.default;
exports.AlignmentLeftButton = _AlignmentLeftButton2.default;
exports.AlignmentCenterButton = _AlignmentCenterButton2.default;
exports.AlignmentRightButton = _AlignmentRightButton2.default;