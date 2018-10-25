export const hasMark = value => value.marks.some(mark => mark.type === 'font-size')
export const getMark = value => value.marks.filter(mark => mark.type === 'font-size').first()

export const createMark = fontSize => ({
  type: 'font-size',
  data: { fontSize },
})

/**
 * Strategy that decides how increase font size node needs to be applied.
 *
 * @param {Object}
 *    @property {Value} value
 *    @property {int} fontSize
 *    @property {function} changeState
 */
export const fontSizeStrategy = ({ change, fontSize, changeState }) => {
  const { value } = change
  const { selection } = value

  if (hasMark(value)) {
    if (selection.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return change
        .removeMark(getMark(value))
        .addMark(createMark(fontSize))
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.')
  } else {
    if (selection.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return change
        .addMark(createMark(fontSize))
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.')
  }

  return change
}

const fontSizeLocationStrategy = ({ change, fontSize }) => hasMark(change.value) ?
    Number(getMark(change.value).data.get('fontSize')) :
    Number(fontSize)

export const fontSizeIncrease = ({ change, fontSize, changeState }) => (
  fontSizeStrategy({
    change,
    changeState,
    fontSize: fontSizeLocationStrategy({ change, fontSize }) + 1,
  })
)

export const fontSizeDecrease = ({ change, fontSize, changeState }) => (
  fontSizeStrategy({
    change,
    changeState,
    fontSize: fontSizeLocationStrategy({ change, fontSize }) - 1,
  })
)

