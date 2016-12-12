import keycode from 'keycode'


const ColorKeyboardShortcut = (event, data, state, editor) => {
  const { changeState, outerState } = editor.props
  const { color } = outerState
  const { showPicker } = color

  const key = keycode(data.code) === 'l'
  const mac = data.isCtrl && data.isCmd && key
  const win = data.isCtrl && data.isAlt && key

  if (mac || win) changeState({ color: { ...color, showPicker: !showPicker } })
  return
}

export default ColorKeyboardShortcut
