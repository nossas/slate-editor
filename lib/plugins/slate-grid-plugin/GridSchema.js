'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GridNode = require('./GridNode');

var _GridNode2 = _interopRequireDefault(_GridNode);

var _GridRowNode = require('./GridRowNode');

var _GridRowNode2 = _interopRequireDefault(_GridRowNode);

var _GridCellNode = require('./GridCellNode');

var _GridCellNode2 = _interopRequireDefault(_GridCellNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridSchema = {
  nodes: {
    'grid': _GridNode2.default,
    'grid-row': _GridRowNode2.default,
    'grid-cell': _GridCellNode2.default
  }
};

exports.default = GridSchema;