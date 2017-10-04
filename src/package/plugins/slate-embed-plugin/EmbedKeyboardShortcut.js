import { appendEmbed } from './EmbedUtils'


const EmbedKeyboardShortcut = (event, data, change) => {
  if (data.isMod && data.key === 'e') return appendEmbed(change)
  return
}

export default EmbedKeyboardShortcut
