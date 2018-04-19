import { isMod } from '../../utils/keyboard-event'
import { insertLinkStrategy } from './LinkUtils'


const LinkKeyboardShortcut = (event, change) => {
  if (isMod(event) && event.key === 'k') return insertLinkStrategy(change)
  return
}

export default LinkKeyboardShortcut
