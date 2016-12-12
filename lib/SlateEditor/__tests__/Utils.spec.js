'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('../Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Utils', function () {

  describe('cloneElement(children, props)', function () {

    it('returns undefined if passed children undefined', function () {
      expect(_Utils2.default.cloneElement(undefined, {})).toEqual(undefined);
    });
  });
});