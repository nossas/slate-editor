import { strikethroughMarkStrategy } from './StrikethroughUtils'


const StrikethroughKeyboardShortcut = (event, change) => {
  const key = event.key === 's'
  const mac = event.metaKey && event.ctrlKey && key
  const win = event.ctrlKey && event.altKey && key

  if (mac || win) return strikethroughMarkStrategy(change)
  return
}

export default StrikethroughKeyboardShortcut
