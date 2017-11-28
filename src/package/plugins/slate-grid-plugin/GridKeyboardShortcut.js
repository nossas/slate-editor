import { appendGrid, splitRow } from './GridUtils'


const GridKeyboardShortcut = (event, change) => {
  const gridKey = event.key === 'g'
  const macGrid = event.ctrlKey && event.metaKey && gridKey
  const winGrid = event.ctrlKey && event.altKey && gridKey
  const isGrid = macGrid || winGrid
  if (isGrid) return appendGrid(change)

  const keyRow = event.key === 'r'
  const macRow = event.ctrlKey && event.metaKey && keyRow
  const winRow = event.ctrlKey && event.altKey && keyRow
  const isRow = macRow || winRow
  if (isRow) return splitRow(change)

  return
}

export default GridKeyboardShortcut
