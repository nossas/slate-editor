import { hasMark, getMark } from './FontSizeUtils'


const SelectionUpdateInputValue = (event, change, editor, options) => {
  const { value } = change
  const { changeState } = editor.props
  const { initialFontSize } = options

  // If do not have font-size mark in selection, update input with initial font size.
  if (!hasMark(value)) changeState({ fontSize: initialFontSize })

  // If it have font-size mark in selection, update input with mark data font size.
  if (hasMark(value)) changeState({ fontSize: getMark(value).data.get('fontSize') })
}

export default SelectionUpdateInputValue
