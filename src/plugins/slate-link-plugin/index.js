import LinkNode from './LinkNode'
import LinkUtils from './LinkUtils'
import LinkButton from './LinkButton'
import LinkKeyboardShortcut from './LinkKeyboardShortcut'


export default options => ({
  schema: {
    nodes: {
      link: LinkNode,
    },
  },
  ...LinkKeyboardShortcut,
})

export {
  LinkNode,
  LinkUtils,
  LinkButton,
  LinkKeyboardShortcut,
}
