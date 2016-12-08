import keycode from 'keycode'


const ColorKeyboardShortcut = ({
  onKeyDown(event, data, state, editor) {
    const { changeState, outerState } = editor.props
    const { color: { showPicker } } = outerState

    const key = keycode(data.code) === 'l'
    const mac = data.isCmd && data.isShift && key
    const win = data.isAlt && data.isShift && key

    if (mac || win) changeState({ color: { showPicker: !showPicker } })
    return
  }
})

export default ColorKeyboardShortcut
