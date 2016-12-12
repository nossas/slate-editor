import {
  unorderedListStrategy,
  orderedListStrategy,
  increaseListDepthStrategy,
  decreaseListDepthStrategy,
} from './ListUtils'


const ListKeyboardShortcut = (event, data, state, editor) => {
  //
  // Behaviour to increase or decrease depth of the list.
  //
  if (data.key === 'tab') {
    event.preventDefault()
    if (data.isShift) return decreaseListDepthStrategy(state)
    return increaseListDepthStrategy(state)
  }

  const unorderedKey = data.key === 'l'
  const macUnordered = data.isCtrl && data.isShift && unorderedKey
  const winUnordered = data.isAlt && data.isShift && unorderedKey
  const isUnordered = macUnordered || winUnordered
  if (isUnordered) return unorderedListStrategy(state)

  const orderedKey = data.key === 'n'
  const macOrdered = data.isCtrl && data.isShift && orderedKey
  const winOrdered = data.isAlt && data.isShift && orderedKey
  const isOrdered = macOrdered || winOrdered
  if (isOrdered) return orderedListStrategy(state)

  return
}

export default ListKeyboardShortcut
