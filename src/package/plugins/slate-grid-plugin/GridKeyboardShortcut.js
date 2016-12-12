import { appendGrid, splitRow } from './GridUtils'


const GridKeyboardShortcut = (event, data, state, editor) => {
  const gridKey = data.key === 'g'
  const macGrid = data.isCtrl && data.isCmd && gridKey
  const winGrid = data.isCtrl && data.isAlt && gridKey
  const isGrid = macGrid || winGrid
  if (isGrid) return appendGrid(state)

  const keyRow = data.key === 'r'
  const macRow = data.isCtrl && data.isCmd && keyRow
  const winRow = data.isCtrl && data.isAlt && keyRow
  const isRow = macRow || winRow
  if (isRow) return splitRow(state)

  return
}

export default GridKeyboardShortcut
