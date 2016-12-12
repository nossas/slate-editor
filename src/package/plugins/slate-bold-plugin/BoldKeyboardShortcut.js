import { boldMarkStrategy } from './BoldUtils'


const BoldKeyboardShortcut = (event, data, state) => {
  if (data.isMod && data.key === 'b') return boldMarkStrategy(state)
  return
}

export default BoldKeyboardShortcut
