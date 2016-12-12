'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasEmbed = exports.hasEmbed = function hasEmbed(state) {
  return state.inlines.some(function (inline) {
    return inline.type === 'embed';
  });
};

var appendEmbed = exports.appendEmbed = function appendEmbed(state) {
  var embed = window.prompt('Enter the embed that you want to add.');
  return state.transform().insertInline({
    type: 'embed',
    isVoid: true,
    data: { embed: embed }
  }).focus().apply();
};