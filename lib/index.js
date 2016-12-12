'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.SlateEditor = exports.SlateAlignmentPlugin = exports.SlateBoldPlugin = exports.SlateColorPlugin = exports.SlateEmbedPlugin = exports.SlateFontFamilyPlugin = exports.SlateFontSizePlugin = exports.SlateGridPlugin = exports.SlateImagePlugin = exports.SlateItalicPlugin = exports.SlateLinkPlugin = exports.SlateListPlugin = exports.SlateStateLogger = exports.SlateStrikethroughPlugin = exports.SlateToggleReadonly = exports.SlateUnderlinePlugin = undefined;

var _SlateEditor = require('./src/SlateEditor');
Object.defineProperty(exports, 'SlateEditor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateEditor).default;
  }
});

var _SlateAlignmentPlugin = require('./src/plugins/slate-alignment-plugin');
Object.defineProperty(exports, 'SlateAlignmentPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateAlignmentPlugin).default;
  }
});

var _SlateBoldPlugin = require('./src/plugins/slate-bold-plugin');
Object.defineProperty(exports, 'SlateBoldPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateBoldPlugin).default;
  }
});

var _SlateColorPlugin = require('./src/plugins/slate-color-plugin');
Object.defineProperty(exports, 'SlateColorPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateColorPlugin).default;
  }
});

var _SlateEmbedPlugin = require('./src/plugins/slate-embed-plugin');
Object.defineProperty(exports, 'SlateEmbedPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateEmbedPlugin).default;
  }
});

var _SlateFontFamilyPlugin = require('./src/plugins/slate-font-family-plugin');
Object.defineProperty(exports, 'SlateFontFamilyPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateFontFamilyPlugin).default;
  }
});

var _SlateFontSizePlugin = require('./src/plugins/slate-font-size-plugin');
Object.defineProperty(exports, 'SlateFontSizePlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateFontSizePlugin).default;
  }
});

var _SlateGridPlugin = require('./src/plugins/slate-grid-plugin');
Object.defineProperty(exports, 'SlateGridPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateGridPlugin).default;
  }
});

var _SlateImagePlugin = require('./src/plugins/slate-image-plugin');
Object.defineProperty(exports, 'SlateImagePlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateImagePlugin).default;
  }
});

var _SlateItalicPlugin = require('./src/plugins/slate-italic-plugin');
Object.defineProperty(exports, 'SlateItalicPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateItalicPlugin).default;
  }
});

var _SlateLinkPlugin = require('./src/plugins/slate-link-plugin');
Object.defineProperty(exports, 'SlateLinkPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateLinkPlugin).default;
  }
});

var _SlateListPlugin = require('./src/plugins/slate-list-plugin');
Object.defineProperty(exports, 'SlateListPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateListPlugin).default;
  }
});

var _SlateStateLogger = require('./src/plugins/slate-state-logger');
Object.defineProperty(exports, 'SlateStateLogger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateStateLogger).default;
  }
});

var _SlateStrikethroughPlugin = require('./src/plugins/slate-strikethrough-plugin');
Object.defineProperty(exports, 'SlateStrikethroughPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateStrikethroughPlugin).default;
  }
});

var _SlateToggleReadonly = require('./src/plugins/slate-toggle-readonly');
Object.defineProperty(exports, 'SlateToggleReadonly', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateToggleReadonly).default;
  }
});

var _SlateUnderlinePlugin = require('./src/plugins/slate-underline-plugin');
Object.defineProperty(exports, 'SlateUnderlinePlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlateUnderlinePlugin).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _Chrome2.default;