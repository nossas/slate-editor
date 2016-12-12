import { insertLinkStrategy } from './LinkUtils'


const LinkKeyboardShortcut = (event, data, state) => {
  if (data.isMod && data.key === 'k') return insertLinkStrategy(state)
  return
}

export default LinkKeyboardShortcut
