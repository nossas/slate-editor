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

var createLink = exports.createLink = function createLink(data) {
  return { type: 'link', data: data };
};

var insertLinkStrategy = exports.insertLinkStrategy = function insertLinkStrategy(state) {
  var transform = state.transform();

  if (hasLinks(state)) {
    transform.unwrapInline('link');
  } else if (state.isExpanded) {
    var href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'));
    var title = window.prompt('Enter the title of the link:');
    var target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top';

    transform.wrapInline(createLink({ href: href, title: title, target: target })).collapseToEnd();
  } else {
    var _href = httpPreffixStrategy(window.prompt('Enter the URL of the link:'));
    var text = window.prompt('Enter the text for the link:');
    var _title = window.prompt('Enter the title of the link:');
    var _target = window.confirm('Do you want to open it into a new tab?:') ? '_blank' : '_top';
    transform.insertText(text).extendBackward(text.length).wrapInline(createLink({ href: _href, title: _title, target: _target })).collapseToEnd();
  }

  return transform.focus().apply();
};