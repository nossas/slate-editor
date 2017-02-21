import * as ColorUtils from './ColorUtils'


const SelectionPickerColorUpdate = (event, data, state, editor) => {
  const { hasMark, getMark } = ColorUtils
  const { outerState, changeState } = editor.props
  const { color } = outerState

  if (hasMark(state)) {
    const rgba = getMark(state).data.get('rgba')
    changeState({ color: { ...color, rgba } })
  }
}

export default SelectionPickerColorUpdate
