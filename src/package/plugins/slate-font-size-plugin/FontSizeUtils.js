export const hasMark = state => state.marks.some(mark => mark.type === 'font-size')
export const getMark = state => state.marks.filter(mark => mark.type === 'font-size').first()

export const createMark = fontSize => ({
  type: 'font-size',
  data: { fontSize },
})

/**
 * Strategy that decides how increase font size node needs to be applied.
 *
 * @param {Object}
 *    @property {State} state
 *    @property {int} fontSize
 *    @property {function} changeState
 */
export const fontSizeStrategy = ({ change, fontSize, changeState }) => {
  const { state } = change
  if (hasMark(state)) {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return change
        .removeMark(getMark(state))
        .addMark(createMark(fontSize))
        .focus()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.')
  } else {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return change
        .addMark(createMark(fontSize))
        .focus()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.')
  }

  return change
}

const fontSizeLocationStrategy = ({ change, fontSize }) => hasMark(change.state) ?
    Number(getMark(change.state).data.get('fontSize')) :
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

