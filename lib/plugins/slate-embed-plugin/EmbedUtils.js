'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasEmbed = exports.hasEmbed = function hasEmbed(value) {
  return value.inlines.some(function (inline) {
    return inline.type === 'embed';
  });
};

var appendEmbed = exports.appendEmbed = function appendEmbed(change) {
  var embed = window.prompt('Enter the embed that you want to add.');
  return change.insertInline({
    type: 'embed',
    isVoid: true,
    data: { embed: embed }
  }).focus();
};