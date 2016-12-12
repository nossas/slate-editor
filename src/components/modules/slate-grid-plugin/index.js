//
// Schema
//
import GridSchema from './GridSchema'
import GridNode from './GridNode'
import GridRowNode from './GridRowNode'
import GridCellNode from './GridCellNode'

//
// Keyboard
//
import GridKeyboardShortcut from './GridKeyboardShortcut'

//
// External
//
import GridUtils from './GridUtils'
import GridButton from './GridButton'


export default options => ({
  schema: GridSchema,

  onKeyDown(...args) {
    return GridKeyboardShortcut(...args)
  }
})

export {
  GridSchema,
  GridNode,
  GridRowNode,
  GridCellNode,
  GridUtils,
  GridButton,
  GridKeyboardShortcut,
}
