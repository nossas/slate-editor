'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Utils', function () {
  describe('cloneElement(children, props)', function () {
    it('returns undefined if passed children undefined', function () {
      expect((0, _Utils.cloneElement)(undefined, {})).toEqual(undefined);
    });

    it('skips undefined children', function () {
      var children = [_react2.default.createElement('span', null), undefined, _react2.default.createElement('div', null), _react2.default.createElement('i', null), undefined];

      var cloned = (0, _Utils.cloneElement)(children, {});

      expect(cloned.length).toBe(3);
    });
  });

  describe('isFunction', function () {
    it('returns false if object is falsey', function () {
      expect((0, _Utils.isFunction)(undefined)).toBe(false);
      expect((0, _Utils.isFunction)(null)).toBe(false);
    });

    it('returns false if object constructor is not Function', function () {
      expect((0, _Utils.isFunction)({})).toBe(false);
      expect((0, _Utils.isFunction)(new Date())).toBe(false);
      expect((0, _Utils.isFunction)(Boolean(true))).toBe(false);
      expect((0, _Utils.isFunction)('a string')).toBe(false);
    });

    it('returns true if object constructor is Function', function () {
      var func = function func() {};
      expect((0, _Utils.isFunction)(func)).toBe(true);
    });
  });
});