import * as ColorUtils from './ColorUtils'


const SelectionPickerColorUpdate = (event, change, editor) => {
  const { hasMark, getMark } = ColorUtils
  const { outerState, changeState } = editor.props
  const { color } = outerState
  const { value } = change

  if (hasMark(value)) {
    const rgba = getMark(value).data.get('rgba')
    changeState({ color: { ...color, rgba } })
  }
}

export default SelectionPickerColorUpdate
