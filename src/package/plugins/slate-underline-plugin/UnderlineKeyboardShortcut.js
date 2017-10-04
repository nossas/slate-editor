import { underlineMarkStrategy } from './UnderlineUtils'


const UnderlineKeyboardShortcut = (event, data, change) => {
  if (data.isMod && data.key === 'u') return underlineMarkStrategy(change)
  return
}

export default UnderlineKeyboardShortcut
