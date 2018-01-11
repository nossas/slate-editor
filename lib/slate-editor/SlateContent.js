'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMark = exports.renderNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _slateReact = require('slate-react');

var _slateAlignmentPlugin = require('../plugins/slate-alignment-plugin');

var _slateEmbedPlugin = require('../plugins/slate-embed-plugin');

var _slateGridPlugin = require('../plugins/slate-grid-plugin');

var _slateImagePlugin = require('../plugins/slate-image-plugin');

var _slateLinkPlugin = require('../plugins/slate-link-plugin');

var _slateListPlugin = require('../plugins/slate-list-plugin');

var _slateBoldPlugin = require('../plugins/slate-bold-plugin');

var _slateColorPlugin = require('../plugins/slate-color-plugin');

var _slateFontFamilyPlugin = require('../plugins/slate-font-family-plugin');

var _slateFontSizePlugin = require('../plugins/slate-font-size-plugin');

var _slateItalicPlugin = require('../plugins/slate-italic-plugin');

var _slateStrikethroughPlugin = require('../plugins/slate-strikethrough-plugin');

var _slateUnderlinePlugin = require('../plugins/slate-underline-plugin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
// Nodes
//


//
// Marks
//


/* eslint-disable default-case */
var renderNode = exports.renderNode = function renderNode(props) {
  switch (props.node.type) {
    case 'alignment':
      return _react2.default.createElement(_slateAlignmentPlugin.AlignmentNode, props);
    case 'embed':
      return _react2.default.createElement(_slateEmbedPlugin.EmbedNode, props);
    case 'grid':
      return _react2.default.createElement(_slateGridPlugin.GridNode, props);
    case 'grid-row':
      return _react2.default.createElement(_slateGridPlugin.GridRowNode, props);
    case 'grid-cell':
      return _react2.default.createElement(_slateGridPlugin.GridCellNode, props);
    case 'image':
      return _react2.default.createElement(_slateImagePlugin.ImageNode, props);
    case 'imageLink':
      return _react2.default.createElement(_slateImagePlugin.ImageLinkNode, props);
    case 'link':
      return _react2.default.createElement(_slateLinkPlugin.LinkNode, props);
    case 'list-item':
      return _react2.default.createElement(_slateListPlugin.ListItemNode, props);
    case 'ordered-list':
      return _react2.default.createElement(_slateListPlugin.OrderedListNode, props);
    case 'unordered-list':
      return _react2.default.createElement(_slateListPlugin.UnorderedListNode, props);
  }
};

var renderMark = exports.renderMark = function renderMark(props) {
  switch (props.mark.type) {
    case 'bold':
      return _react2.default.createElement(_slateBoldPlugin.BoldMark, props);
    case 'color':
      return _react2.default.createElement(_slateColorPlugin.ColorMark, props);
    case 'font-family':
      return _react2.default.createElement(_slateFontFamilyPlugin.FontFamilyMark, props);
    case 'font-size':
      return _react2.default.createElement(_slateFontSizePlugin.FontSizeMark, props);
    case 'italic':
      return _react2.default.createElement(_slateItalicPlugin.ItalicMark, props);
    case 'strikethrough':
      return _react2.default.createElement(_slateStrikethroughPlugin.StrikethroughMark, props);
    case 'underline':
      return _react2.default.createElement(_slateUnderlinePlugin.UnderlineMark, props);
  }
};
/* eslint-disable default-case */

exports.default = function (_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      style = _ref.style,
      value = _ref.value,
      outerState = _ref.outerState,
      plugins = _ref.plugins,
      onChange = _ref.onChange,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['className', 'wrapperStyle', 'style', 'value', 'outerState', 'plugins', 'onChange', 'children']);

  var readOnly = outerState.readOnly;


  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('editor--content', className), style: wrapperStyle },
    _react2.default.createElement(_slateReact.Editor, _extends({
      plugins: plugins,
      value: value,
      onChange: onChange,
      readOnly: readOnly,
      outerState: outerState,
      style: style,
      renderNode: renderNode,
      renderMark: renderMark
    }, rest)),
    children
  );
};