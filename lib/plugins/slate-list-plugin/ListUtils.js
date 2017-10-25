'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isList = exports.isList = function isList(state) {
  return state.blocks.some(function (block) {
    return block.type === 'list-item';
  });
};

var hasParentOfType = exports.hasParentOfType = function hasParentOfType(state, type) {
  return state.blocks.some(function (block) {
    return !!state.document.getClosest(block.key, function (parent) {
      return parent.type === type;
    });
  });
};
var isUnorderedList = exports.isUnorderedList = function isUnorderedList(state) {
  return hasParentOfType(state, 'unordered-list');
};
var isOrderedList = exports.isOrderedList = function isOrderedList(state) {
  return hasParentOfType(state, 'ordered-list');
};

var getNodeOfType = exports.getNodeOfType = function getNodeOfType(state, type) {
  return state.blocks.filter(function (block) {
    return block.type === type;
  }).first();
};
var getUnorderedListNode = exports.getUnorderedListNode = function getUnorderedListNode(state) {
  return getNodeOfType(state, 'unordered-list');
};
var getOrderedListNode = exports.getOrderedListNode = function getOrderedListNode(state) {
  return getNodeOfType(state, 'ordered-list');
};

var removeUnorderedList = exports.removeUnorderedList = function removeUnorderedList(change) {
  return change.setBlock('paragraph').unwrapBlock('unordered-list').focus();
};

var switchToOrderedList = exports.switchToOrderedList = function switchToOrderedList(change) {
  return change.unwrapBlock('unordered-list').wrapBlock('ordered-list').focus();
};

var removeOrderedList = exports.removeOrderedList = function removeOrderedList(change) {
  return change.setBlock('paragraph').unwrapBlock('ordered-list').focus();
};

var switchToUnorderedList = exports.switchToUnorderedList = function switchToUnorderedList(change) {
  return change.wrapBlock('unordered-list').unwrapBlock('ordered-list').focus();
};

var applyList = exports.applyList = function applyList(change, type) {
  return change.setBlock('list-item').wrapBlock(type).focus();
};

var onlyRemove = exports.onlyRemove = function onlyRemove(change, type) {
  return change.unwrapBlock(type).focus();
};
var onlyRemoveUnorderedList = exports.onlyRemoveUnorderedList = function onlyRemoveUnorderedList(change) {
  return onlyRemove(change, 'unordered-list');
};
var onlyRemoveOrderedList = exports.onlyRemoveOrderedList = function onlyRemoveOrderedList(change) {
  return onlyRemove(change, 'ordered-list');
};

var applyUnorderedList = exports.applyUnorderedList = function applyUnorderedList(change) {
  return applyList(change, 'unordered-list');
};
var applyOrderedList = exports.applyOrderedList = function applyOrderedList(change) {
  return applyList(change, 'ordered-list');
};

var deepRemoveList = function deepRemoveList(change) {
  var state = change.state;
  var document = state.document;

  var node = getNodeOfType(state, 'list-item');
  var depth = document.getDepth(node.key);

  Array(depth).fill('.').forEach(function () {
    var parent = document.getParent(node.key);
    if (parent.type === 'unordered-list') removeUnorderedList(change);else removeOrderedList(change);
  });
  return change;
};

var unorderedListStrategy = exports.unorderedListStrategy = function unorderedListStrategy(change) {
  var state = change.state;

  if (!isList(state)) return applyList(change, 'unordered-list');

  if (isUnorderedList(state)) return deepRemoveList(change);
  if (isOrderedList(state)) return switchToUnorderedList(change);
  console.info('[SlateJS][ListPlugin] It is a different type of list.');return change;
};

var orderedListStrategy = exports.orderedListStrategy = function orderedListStrategy(change) {
  var state = change.state;
  // If it is not a list yet, transform it!

  if (!isList(state)) return applyList(change, 'ordered-list');

  // If it is already a list, handle it!
  if (isOrderedList(state)) return deepRemoveList(change);else if (isUnorderedList(state)) return switchToOrderedList(change);else console.info('[SlateJS][ListPlugin] It is a different type of list.');return change;
};

var increaseListDepthStrategy = exports.increaseListDepthStrategy = function increaseListDepthStrategy(change) {
  var state = change.state;
  // If it is not a list, kill the action immediately.

  if (!isList(state)) return change;

  if (isUnorderedList(state)) return applyUnorderedList(change);
  if (isOrderedList(state)) return applyOrderedList(change);
  return change;
};

var decreaseListDepthStrategy = exports.decreaseListDepthStrategy = function decreaseListDepthStrategy(change) {
  var state = change.state;
  // If it is not a list, kill the action immediately.

  if (!isList(state)) return change;

  var node = getNodeOfType(state, 'list-item');
  var depth = state.document.getDepth(node.key);
  if (isUnorderedList(state) && depth > 2) return onlyRemoveUnorderedList(change);
  if (isOrderedList(state) && depth > 2) return onlyRemoveOrderedList(change);
  return change;
};