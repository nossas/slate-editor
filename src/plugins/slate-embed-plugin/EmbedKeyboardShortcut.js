import { appendEmbed } from './EmbedUtils'


const EmbedKeyboardShortcut = (event, data, state, editor) => {
  if (data.isMod && data.key === 'e') return appendEmbed(state)
  return
}

export default EmbedKeyboardShortcut
