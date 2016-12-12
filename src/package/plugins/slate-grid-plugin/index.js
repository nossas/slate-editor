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
import GridButtonBar from './GridButtonBar'
import GridButton from './GridButton'
import GridSplitRowButton from './GridSplitRowButton'


export default options => ({
  schema: GridSchema,

  onKeyDown(...args) {
    return GridKeyboardShortcut(...args)
  },
})

export {
  GridSchema,
  GridNode,
  GridRowNode,
  GridCellNode,
  GridKeyboardShortcut,
  GridUtils,
  GridButtonBar,
  GridButton,
  GridSplitRowButton,
}
