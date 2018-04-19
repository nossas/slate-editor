//
// Rendering
//
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
import * as GridUtils from './GridUtils'
import GridButtonBar from './GridButtonBar'
import GridButton from './GridButton'
import GridSplitRowButton from './GridSplitRowButton'


const GridPlugin = options => ({
  onKeyDown(...args) {
    return GridKeyboardShortcut(...args)
  },
})

export {
  GridPlugin,
  GridNode,
  GridRowNode,
  GridCellNode,
  GridKeyboardShortcut,
  GridUtils,
  GridButtonBar,
  GridButton,
  GridSplitRowButton,
}
