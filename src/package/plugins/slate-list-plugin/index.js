//
// Rendering
//
import ListItemNode from './ListItemNode'
import OrderedListNode from './OrderedListNode'
import UnorderedListNode from './UnorderedListNode'

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
  onKeyDown(...args) {
    return ListKeyboardShortcut(...args)
  },
})

export {
  ListPlugin,
  ListItemNode,
  OrderedListNode,
  UnorderedListNode,
  ListKeyboardShortcut,
  ListUtils,
  ListButtonBar,
  UnorderedListButton,
  OrderedListButton,
}
