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
import * as ListUtils from './ListUtils'
import ListButtonBar from './ListButtonBar'
import UnorderedListButton from './UnorderedListButton'
import OrderedListButton from './OrderedListButton'


const ListPlugin = options => ({
  schema: ListSchema,

  onKeyDown(...args) {
    return ListKeyboardShortcut(...args)
  },
})

export {
  ListPlugin,
  ListSchema,
  ListNode,
  ListKeyboardShortcut,
  ListUtils,
  ListButtonBar,
  UnorderedListButton,
  OrderedListButton,
}
