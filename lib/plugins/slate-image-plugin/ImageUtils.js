'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var insertImageStrategy = exports.insertImageStrategy = function insertImageStrategy(state) {
  var src = 'https://orig06.deviantart.net/7869/f/2009/131/9/e/zubat_icon_by_the_fry_bat.gif';
  return state.transform().insertInline({
    type: 'image',
    isVoid: true,
    data: { src: src }
  }).apply();
};