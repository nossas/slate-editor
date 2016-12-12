'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontSizeKeyboardShortcut = exports.FontSizeInput = exports.FontSizeUtils = exports.FontSizeMark = undefined;

var _FontSizeMark = require('./FontSizeMark');

var _FontSizeMark2 = _interopRequireDefault(_FontSizeMark);

var _FontSizeUtils = require('./FontSizeUtils');

var _FontSizeUtils2 = _interopRequireDefault(_FontSizeUtils);

var _FontSizeInput = require('./FontSizeInput');

var _FontSizeInput2 = _interopRequireDefault(_FontSizeInput);

var _FontSizeSchema = require('./FontSizeSchema');

var _FontSizeSchema2 = _interopRequireDefault(_FontSizeSchema);

var _FontSizeKeyboardShortcut = require('./FontSizeKeyboardShortcut');

var _FontSizeKeyboardShortcut2 = _interopRequireDefault(_FontSizeKeyboardShortcut);

var _ValidatePluginOptions = require('./ValidatePluginOptions');

var _ValidatePluginOptions2 = _interopRequireDefault(_ValidatePluginOptions);

var _SelectionUpdateInputValue = require('./SelectionUpdateInputValue');

var _SelectionUpdateInputValue2 = _interopRequireDefault(_SelectionUpdateInputValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation
var FontSizePlugin = function FontSizePlugin(options) {

  (0, _ValidatePluginOptions2.default)(options);
  var initialFontSize = options.initialFontSize;


  return {
    schema: _FontSizeSchema2.default,

    onKeyDown: function onKeyDown() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _FontSizeKeyboardShortcut2.default.apply(undefined, args.concat([initialFontSize]));
    },
    onSelect: function onSelect() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _SelectionUpdateInputValue2.default.apply(undefined, args.concat([initialFontSize]));
    }
  };
};

// onSelect
exports.FontSizeMark = _FontSizeMark2.default;
exports.FontSizeUtils = _FontSizeUtils2.default;
exports.FontSizeInput = _FontSizeInput2.default;
exports.FontSizeKeyboardShortcut = _FontSizeKeyboardShortcut2.default;
exports.default = FontSizePlugin;