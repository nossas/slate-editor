import keycode from 'keycode'

import { listNodeStrategy } from './ListUtils'


const ListKeyboardShortcut = ({
  onKeyDown(event, data, state) {
    if (keycode(data.code) === 'tab') {
      event.preventDefault()
      console.log('tab pressed! (;')
    }
    if (!data.isMod || keycode(data.code) !== 'b') return
    return listNodeStrategy(state)
  }
})

export default ListKeyboardShortcut
