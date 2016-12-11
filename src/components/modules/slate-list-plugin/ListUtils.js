export const isList = state => state.blocks.some(block => block.type === 'list-item')

export const hasParentOfType = (state, type) => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === type)
)
export const isUnorderedList = state => hasParentOfType(state, 'unordered-list')
export const isOrderedList = state => hasParentOfType(state, 'ordered-list')

export const getNodeOfType = (state, type) => state.blocks.filter(block => block.type === type).first()
export const getUnorderedListNode = state => getNodeOfType(state, 'unordered-list')
export const getOrderedListNode = state => getNodeOfType(state, 'ordered-list')

export const removeUnorderedList = transform => transform
  .setBlock('paragraph')
  .unwrapBlock('unordered-list')
  .focus()

export const switchToOrderedList = transform => transform
  .unwrapBlock('unordered-list')
  .wrapBlock('ordered-list')
  .focus()

export const removeOrderedList = transform => transform
  .setBlock('paragraph')
  .unwrapBlock('ordered-list')
  .focus()

export const switchToUnorderedList = transform => transform
  .wrapBlock('unordered-list')
  .unwrapBlock('ordered-list')
  .focus()

export const applyList = (transform, type) => transform
  .setBlock('list-item')
  .wrapBlock(type)
  .focus()

export const applyUnorderedList = state => applyList(state.transform(), 'unordered-list')
export const applyOrderedList = state => applyList(state.transform(), 'ordered-list')

const deepRemoveList = state => {
  const { document } = state
  const node = getNodeOfType(state, 'list-item')
  const depth = document.getDepth(node.key)

  let transform = state.transform()
  Array(depth).fill('.').forEach(() => {
    const parent = document.getParent(node.key)
    if (parent.type === 'unordered-list') removeUnorderedList(transform)
    else removeOrderedList(transform)
  })
  return transform
}

export const unorderedListStrategy = state => {
  let transform = state.transform()
  if (!isList(state)) return applyList(transform, 'unordered-list').apply()

  if (isUnorderedList(state)) return deepRemoveList(state).apply()
  else if (isOrderedList(state)) return switchToUnorderedList(transform).apply()
  else console.info('[SlateJS][ListPlugin] It is a different type of list.'); return state
}

export const orderedListStrategy = state => {
  const transform = state.transform()

  // If it is not a list yet, transform it!
  if (!isList(state)) return applyList(transform, 'ordered-list').apply()

  // If it is already a list, handle it!
  if (isOrderedList(state)) return deepRemoveList(state).apply()
  else if (isUnorderedList(state)) return switchToOrderedList(transform).apply()
  else console.info('[SlateJS][ListPlugin] It is a different type of list.'); return state
}

export const increaseListDepthStrategy = state => {
  // If it is not a list, cancel the behaviour immediately.
  if (!isList(state)) return state

  else if (isUnorderedList(state)) {console.log('isUnorderedList'); return applyUnorderedList(state).apply()}
  else if (isOrderedList(state)) {console.log('isOrderedList'); return applyOrderedList(state).apply()}
  return state
}
