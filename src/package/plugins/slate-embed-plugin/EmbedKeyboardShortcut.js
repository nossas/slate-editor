import { isMod } from '../../utils/keyboard-event'
import { appendEmbed } from './EmbedUtils'

const EmbedKeyboardShortcut = (event, change) => {
  if (isMod(event) && event.key === 'e') return appendEmbed(change)
  return
}

export default EmbedKeyboardShortcut
