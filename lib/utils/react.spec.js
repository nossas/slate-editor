'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('./react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('package/utils/react', function () {
  describe('cloneElement(children, props)', function () {
    it('returns undefined if passed children undefined', function () {
      expect((0, _react3.cloneElement)(undefined, {})).toEqual(undefined);
    });

    it('skips undefined children', function () {
      var children = [_react2.default.createElement('span', null), undefined, _react2.default.createElement('div', null), _react2.default.createElement('i', null), undefined];

      var cloned = (0, _react3.cloneElement)(children, {});

      expect(cloned.length).toBe(3);
    });
  });
});