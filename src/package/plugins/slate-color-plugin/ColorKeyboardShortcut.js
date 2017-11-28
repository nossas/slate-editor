const ColorKeyboardShortcut = (event, change, editor) => {
  const { changeState, outerState } = editor.props
  const { color } = outerState
  const { showPicker } = color

  const key = event.key === 'l'
  const mac = event.ctrlKey && event.metaKey && key
  const win = event.ctrlKey && event.altKey && key

  if (mac || win) changeState({ color: { ...color, showPicker: !showPicker } })
  return
}

export default ColorKeyboardShortcut
