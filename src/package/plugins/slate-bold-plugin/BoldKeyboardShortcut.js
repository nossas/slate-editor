import { boldMarkStrategy } from './BoldUtils'


const BoldKeyboardShortcut = (event, data, change) => {
  if (data.isMod && data.key === 'b') return boldMarkStrategy(change)
  return
}

export default BoldKeyboardShortcut
