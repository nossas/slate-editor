"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMod = exports.isMod = function isMod(event) {
  return event.metaKey && !event.ctrlKey || event.ctrlKey;
};