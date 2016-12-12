'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var httpPreffixStrategy = exports.httpPreffixStrategy = function httpPreffixStrategy(href) {
  return href.search('https?://') >= 0 ? href : 'http://' + href;
};

var hasLinks = exports.hasLinks = function hasLinks(state) {
  return state.inlines.some(function (inline) {
    return inline.type === 'link';
  });
};

var insertLinkStrategy = exports.insertLinkStrategy = function insertLinkStrategy(state) {
  if (hasLinks(state)) {
    return state.transform().unwrapInline('link').apply();
  } else if (state.isExpanded) {
    var href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'));
    var title = window.prompt('Enter the title of the link:');
    var target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top';
    var newState = state.transform().wrapInline({
      type: 'link',
      data: { href: href, title: title, target: target }
    }).collapseToEnd().apply();
    return newState;
  } else {
    var _href = window.prompt('Enter the URL of the link:');
    var text = window.prompt('Enter the text for the link:');
    return state.transform().insertText(text).extendBackward(text.length).wrapInline({
      type: 'link',
      data: { href: _href }
    }).collapseToEnd().apply();
  }
};