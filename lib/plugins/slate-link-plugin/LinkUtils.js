'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var httpPreffixStrategy = exports.httpPreffixStrategy = function httpPreffixStrategy(href) {
  return href.search('https?://') >= 0 ? href : 'http://' + href;
};
var hasLinks = exports.hasLinks = function hasLinks(value) {
  return value.inlines.some(function (inline) {
    return inline.type === 'link';
  });
};
var getLink = exports.getLink = function getLink(value) {
  return value.inlines.filter(function (inline) {
    return inline.type === 'link';
  }).first();
};
var createLink = exports.createLink = function createLink(data) {
  return { type: 'link', data: data };
};
var hasMultiBlocks = exports.hasMultiBlocks = function hasMultiBlocks(value) {
  return value.blocks.size > 1;
};

var unlink = exports.unlink = function unlink(change) {
  return change.unwrapInline('link').focus();
};

var updateLinkStrategy = exports.updateLinkStrategy = function updateLinkStrategy(_ref) {
  var change = _ref.change,
      _ref$data = _ref.data,
      title = _ref$data.title,
      href = _ref$data.href,
      text = _ref$data.text,
      target = _ref$data.target;
  var value = change.value;


  if (value.isCollapsed) {
    change.moveOffsetsTo(0, value.anchorText.characters.size);
  }

  change.insertText(text).setInline({
    type: 'link',
    data: { title: title, href: href, text: text, target: target }
  });

  return change;
};

var insertLinkStrategy = exports.insertLinkStrategy = function insertLinkStrategy(change) {
  var value = change.value;


  if (hasLinks(value)) {
    change.unwrapInline('link');
  } else if (value.isExpanded && !hasMultiBlocks(value)) {
    change.wrapInline(createLink({ target: '_blank', openModal: true }));
  } else if (hasMultiBlocks(value)) {
    console.info('[SlateJS][LinkPlugin] has multiple blocks on selection');
  } else if (value.isCollapsed && !hasLinks(value)) {
    console.info('[SlateJS][LinkPlugin] selection collapsed, w/o links on selection');
  }

  return change;
};