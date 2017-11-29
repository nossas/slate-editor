'use strict';

var _typeCheck = require('./type-check');

describe('package/utils/type-check', function () {
  describe('isFunction', function () {
    it('returns false if object is falsey', function () {
      expect((0, _typeCheck.isFunction)(undefined)).toBe(false);
      expect((0, _typeCheck.isFunction)(null)).toBe(false);
    });

    it('returns false if object constructor is not Function', function () {
      expect((0, _typeCheck.isFunction)({})).toBe(false);
      expect((0, _typeCheck.isFunction)(new Date())).toBe(false);
      expect((0, _typeCheck.isFunction)(Boolean(true))).toBe(false);
      expect((0, _typeCheck.isFunction)('a string')).toBe(false);
    });

    it('returns true if object constructor is Function', function () {
      var func = function func() {};
      expect((0, _typeCheck.isFunction)(func)).toBe(true);
    });
  });
});