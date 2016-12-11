import keycode from 'keycode'

import {
  unorderedListStrategy,
  orderedListStrategy,
  increaseListDepthStrategy,
} from './ListUtils'


const ListKeyboardShortcut = ({
  onKeyDown(event, data, state, editor) {

    //
    // Behaviour to increase or decrease depth of the list.
    //
    if (keycode(data.code) === 'tab') {
      event.preventDefault()
      if (data.isShift) return
      return increaseListDepthStrategy(state)
    }

    const unorderedKey = keycode(data.code) === 'l'
    const macUnordered = data.isCtrl && data.isShift && unorderedKey
    const winUnordered = data.isAlt && data.isShift && unorderedKey
    const isUnordered = macUnordered || winUnordered
    if (isUnordered) return unorderedListStrategy(state)

    const orderedKey = keycode(data.code) === 'n'
    const macOrdered = data.isCtrl && data.isShift && orderedKey
    const winOrdered = data.isAlt && data.isShift && orderedKey
    const isOrdered = macOrdered || winOrdered
    if (isOrdered) return orderedListStrategy(state)

    return
  }
})

export default ListKeyboardShortcut
