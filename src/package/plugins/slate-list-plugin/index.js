//
// Schema
//
import ListSchema from './ListSchema'
import ListNode from './ListNode'

//
// Keyboard
//
import ListKeyboardShortcut from './ListKeyboardShortcut'

//
// External
//
import ListUtils from './ListUtils'
import ListButtonBar from './ListButtonBar'
import UnorderedListButton from './UnorderedListButton'
import OrderedListButton from './OrderedListButton'


export default options => ({
  schema: ListSchema,

  onKeyDown(...args) {
    return ListKeyboardShortcut(...args)
  },
})

export {
  ListSchema,
  ListNode,
  ListKeyboardShortcut,
  ListUtils,
  ListButtonBar,
  UnorderedListButton,
  OrderedListButton,
}
