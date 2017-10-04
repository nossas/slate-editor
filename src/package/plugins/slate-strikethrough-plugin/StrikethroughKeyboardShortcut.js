import { strikethroughMarkStrategy } from './StrikethroughUtils'


const StrikethroughKeyboardShortcut = (event, data, change) => {
  const key = data.key === 's'
  const mac = data.isCmd && data.isCtrl && key
  const win = data.isCtrl && data.isAlt && key

  if (mac || win) return strikethroughMarkStrategy(change)
  return
}

export default StrikethroughKeyboardShortcut
