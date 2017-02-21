'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontSizeInput = exports.FontSizeUtils = exports.FontSizeKeyboardShortcut = exports.FontSizeMark = exports.FontSizeSchema = exports.FontSizePlugin = undefined;

var _FontSizeSchema = require('./FontSizeSchema');

var _FontSizeSchema2 = _interopRequireDefault(_FontSizeSchema);

var _FontSizeMark = require('./FontSizeMark');

var _FontSizeMark2 = _interopRequireDefault(_FontSizeMark);

var _FontSizeKeyboardShortcut = require('./FontSizeKeyboardShortcut');

var _FontSizeKeyboardShortcut2 = _interopRequireDefault(_FontSizeKeyboardShortcut);

var _FontSizeUtils = require('./FontSizeUtils');

var FontSizeUtils = _interopRequireWildcard(_FontSizeUtils);

var _FontSizeInput = require('./FontSizeInput');

var _FontSizeInput2 = _interopRequireDefault(_FontSizeInput);

var _ValidatePluginOptions = require('./ValidatePluginOptions');

var _ValidatePluginOptions2 = _interopRequireDefault(_ValidatePluginOptions);

var _SelectionUpdateInputValue = require('./SelectionUpdateInputValue');

var _SelectionUpdateInputValue2 = _interopRequireDefault(_SelectionUpdateInputValue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation


// External
var FontSizePlugin = function FontSizePlugin(options) {

  (0, _ValidatePluginOptions2.default)(options);

  return {
    schema: _FontSizeSchema2.default,

    onKeyDown: function onKeyDown() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _FontSizeKeyboardShortcut2.default.apply(undefined, args.concat([options]));
    },
    onSelect: function onSelect() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _SelectionUpdateInputValue2.default.apply(undefined, args.concat([options]));
    }
  };
};

// Selection


// Keyboard
// Schema
exports.FontSizePlugin = FontSizePlugin;
exports.FontSizeSchema = _FontSizeSchema2.default;
exports.FontSizeMark = _FontSizeMark2.default;
exports.FontSizeKeyboardShortcut = _FontSizeKeyboardShortcut2.default;
exports.FontSizeUtils = FontSizeUtils;
exports.FontSizeInput = _FontSizeInput2.default;