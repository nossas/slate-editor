export const isList = state => state.blocks.some(block => block.type === 'list-item')

export const hasParentOfType = (state, type) => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === type)
)
export const isUnorderedList = state => hasParentOfType(state, 'unordered-list')
export const isOrderedList = state => hasParentOfType(state, 'ordered-list')

export const getNodeOfType = (state, type) => state.blocks.filter(block => block.type === type).first()
export const getUnorderedListNode = state => getNodeOfType(state, 'unordered-list')
export const getOrderedListNode = state => getNodeOfType(state, 'ordered-list')

export const removeUnorderedList = change => change
  .setBlock('paragraph')
  .unwrapBlock('unordered-list')
  .focus()

export const switchToOrderedList = change => change
  .unwrapBlock('unordered-list')
  .wrapBlock('ordered-list')
  .focus()

export const removeOrderedList = change => change
  .setBlock('paragraph')
  .unwrapBlock('ordered-list')
  .focus()

export const switchToUnorderedList = change => change
  .wrapBlock('unordered-list')
  .unwrapBlock('ordered-list')
  .focus()

export const applyList = (change, type) => change
  .setBlock('list-item')
  .wrapBlock(type)
  .focus()

export const onlyRemove = (change, type) => change.unwrapBlock(type).focus()
export const onlyRemoveUnorderedList = change => onlyRemove(change, 'unordered-list')
export const onlyRemoveOrderedList = change => onlyRemove(change, 'ordered-list')

export const applyUnorderedList = change => applyList(change, 'unordered-list')
export const applyOrderedList = change => applyList(change, 'ordered-list')

const deepRemoveList = change => {
  const { state } = change
  const { document } = state
  const node = getNodeOfType(state, 'list-item')
  const depth = document.getDepth(node.key)

  Array(depth).fill('.').forEach(() => {
    const parent = document.getParent(node.key)
    if (parent.type === 'unordered-list') removeUnorderedList(change)
    else removeOrderedList(change)
  })
  return change
}

export const unorderedListStrategy = change => {
  const { state } = change
  if (!isList(state)) return applyList(change, 'unordered-list')

  if (isUnorderedList(state)) return deepRemoveList(change)
  if (isOrderedList(state)) return switchToUnorderedList(change)
  console.info('[SlateJS][ListPlugin] It is a different type of list.'); return change
}

export const orderedListStrategy = change => {
  const { state } = change
  // If it is not a list yet, transform it!
  if (!isList(state)) return applyList(change, 'ordered-list')

  // If it is already a list, handle it!
  if (isOrderedList(state)) return deepRemoveList(change)
  else if (isUnorderedList(state)) return switchToOrderedList(change)
  else console.info('[SlateJS][ListPlugin] It is a different type of list.'); return change
}

export const increaseListDepthStrategy = change => {
  const { state } = change
  // If it is not a list, kill the action immediately.
  if (!isList(state)) return change


  if (isUnorderedList(state)) return applyUnorderedList(change)
  if (isOrderedList(state)) return applyOrderedList(change)
  return change
}

export const decreaseListDepthStrategy = change => {
  const { state } = change
  // If it is not a list, kill the action immediately.
  if (!isList(state)) return change

  const node = getNodeOfType(state, 'list-item')
  const depth = state.document.getDepth(node.key)
  if (isUnorderedList(state) && depth > 2) return onlyRemoveUnorderedList(change)
  if (isOrderedList(state) && depth > 2) return onlyRemoveOrderedList(change)
  return change
}
