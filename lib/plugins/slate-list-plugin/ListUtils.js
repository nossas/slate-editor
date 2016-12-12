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

var removeUnorderedList = exports.removeUnorderedList = function removeUnorderedList(transform) {
  return transform.setBlock('paragraph').unwrapBlock('unordered-list').focus();
};

var switchToOrderedList = exports.switchToOrderedList = function switchToOrderedList(transform) {
  return transform.unwrapBlock('unordered-list').wrapBlock('ordered-list').focus();
};

var removeOrderedList = exports.removeOrderedList = function removeOrderedList(transform) {
  return transform.setBlock('paragraph').unwrapBlock('ordered-list').focus();
};

var switchToUnorderedList = exports.switchToUnorderedList = function switchToUnorderedList(transform) {
  return transform.wrapBlock('unordered-list').unwrapBlock('ordered-list').focus();
};

var applyList = exports.applyList = function applyList(transform, type) {
  return transform.setBlock('list-item').wrapBlock(type).focus();
};

var onlyRemove = exports.onlyRemove = function onlyRemove(state, type) {
  return state.transform().unwrapBlock(type).focus();
};
var onlyRemoveUnorderedList = exports.onlyRemoveUnorderedList = function onlyRemoveUnorderedList(state) {
  return onlyRemove(state, 'unordered-list');
};
var onlyRemoveOrderedList = exports.onlyRemoveOrderedList = function onlyRemoveOrderedList(state) {
  return onlyRemove(state, 'ordered-list');
};

var applyUnorderedList = exports.applyUnorderedList = function applyUnorderedList(state) {
  return applyList(state.transform(), 'unordered-list');
};
var applyOrderedList = exports.applyOrderedList = function applyOrderedList(state) {
  return applyList(state.transform(), 'ordered-list');
};

var deepRemoveList = function deepRemoveList(state) {
  var document = state.document;

  var node = getNodeOfType(state, 'list-item');
  var depth = document.getDepth(node.key);

  var transform = state.transform();
  Array(depth).fill('.').forEach(function () {
    var parent = document.getParent(node.key);
    if (parent.type === 'unordered-list') removeUnorderedList(transform);else removeOrderedList(transform);
  });
  return transform;
};

var unorderedListStrategy = exports.unorderedListStrategy = function unorderedListStrategy(state) {
  var transform = state.transform();
  if (!isList(state)) return applyList(transform, 'unordered-list').apply();

  if (isUnorderedList(state)) return deepRemoveList(state).apply();
  if (isOrderedList(state)) return switchToUnorderedList(transform).apply();
  console.info('[SlateJS][ListPlugin] It is a different type of list.');return state;
};

var orderedListStrategy = exports.orderedListStrategy = function orderedListStrategy(state) {
  var transform = state.transform();

  // If it is not a list yet, transform it!
  if (!isList(state)) return applyList(transform, 'ordered-list').apply();

  // If it is already a list, handle it!
  if (isOrderedList(state)) return deepRemoveList(state).apply();else if (isUnorderedList(state)) return switchToOrderedList(transform).apply();else console.info('[SlateJS][ListPlugin] It is a different type of list.');return state;
};

var increaseListDepthStrategy = exports.increaseListDepthStrategy = function increaseListDepthStrategy(state) {
  // If it is not a list, kill the action immediately.
  if (!isList(state)) return state;

  if (isUnorderedList(state)) return applyUnorderedList(state).apply();
  if (isOrderedList(state)) return applyOrderedList(state).apply();
  return state;
};

var decreaseListDepthStrategy = exports.decreaseListDepthStrategy = function decreaseListDepthStrategy(state) {
  // If it is not a list, kill the action immediately.
  if (!isList(state)) return state;

  var node = getNodeOfType(state, 'list-item');
  var depth = state.document.getDepth(node.key);
  if (isUnorderedList(state) && depth > 2) return onlyRemoveUnorderedList(state).apply();
  if (isOrderedList(state) && depth > 2) return onlyRemoveOrderedList(state).apply();
  return state;
};