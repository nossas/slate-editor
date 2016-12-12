import { underlineMarkStrategy } from './UnderlineUtils'


const UnderlineKeyboardShortcut = (event, data, state) => {
  if (data.isMod && data.key === 'u') return underlineMarkStrategy(state)
  return
}

export default UnderlineKeyboardShortcut
