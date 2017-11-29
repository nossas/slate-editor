"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = exports.isFunction = function isFunction(obj) {
  return !!(obj && obj.constructor === Function);
};