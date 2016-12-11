import UnorderedListNode from './UnorderedListNode'
import OrderedListNode from './OrderedListNode'
import ListItemNode from './ListItemNode'

const ListSchema = {
  nodes: {
    'unordered-list': UnorderedListNode,
    'list-item': ListItemNode,
    'ordered-list': OrderedListNode,
  },
}

export default ListSchema
