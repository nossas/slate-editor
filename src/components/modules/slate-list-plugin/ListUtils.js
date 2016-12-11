export const isList = state => state.blocks.some(block => block.type === 'list-item')

export const hasParentOfType = (state, type) => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === type)
)
export const isUnorderedList = state => hasParentOfType(state, 'unordered-list')
export const isOrderedList = state => hasParentOfType(state, 'ordered-list')

export const getNodeOf = state => state.blocks.filter(block => block.type === 'list').first()

export const removeUnorderedList = transform => transform
  .setBlock('paragraph')
  .unwrapBlock('unordered-list')
  .focus().apply()

export const switchToOrderedList = transform => transform
  .unwrapBlock('unordered-list')
  .wrapBlock('ordered-list')
  .focus().apply()

export const removeOrderedList = transform => transform
  .setBlock('paragraph')
  .unwrapBlock('ordered-list')
  .focus().apply()

export const switchToUnorderedList = transform => transform
  .wrapBlock('unordered-list')
  .unwrapBlock('ordered-list')
  .focus().apply()

export const applyList = (transform, type) => transform
  .setBlock('list-item')
  .wrapBlock(type)
  .focus().apply()

export const listStrategy = (state, type) => {
  const transform = state.transform()

  if (isList(state)) {
    if (isUnorderedList(state)) {
      if (type === 'unordered-list') return removeUnorderedList(transform)
      else if (type === 'ordered-list') return switchToOrderedList(transform)
    }

    else if (isOrderedList(state)) {
      if (type === 'ordered-list') return removeOrderedList(transform)
      else if (type === 'unordered-list') return switchToUnorderedList(transform)
    }
  }

  return applyList(transform, type)
}

export const unorderedListStrategy = state => {
  const transform = state.transform()

  if (isList(state)) {
    if (isUnorderedList(state)) return removeUnorderedList(transform)
    else if (isOrderedList(state)) return switchToUnorderedList(transform)
    else console.info('[SlateJS][ListPlugin] It is a different type of list.'); return state
  }

  return applyList(transform, 'unordered-list')
}

export const orderedListStrategy = state => {
  const transform = state.transform()

  if (isList(state)) {
    if (isOrderedList(state)) return removeOrderedList(transform)
    else if (isUnorderedList(state)) return switchToOrderedList(transform)
    else console.info('[SlateJS][ListPlugin] It is a different type of list.'); return state
  }

  return applyList(transform, 'ordered-list')
}
