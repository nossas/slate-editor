import { insertLinkStrategy } from './LinkUtils'


const LinkKeyboardShortcut = (event, data, change) => {
  if (data.isMod && data.key === 'k') return insertLinkStrategy(change)
  return
}

export default LinkKeyboardShortcut
