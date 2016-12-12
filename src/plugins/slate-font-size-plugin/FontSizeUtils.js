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
export const fontSizeStrategy = ({ state, fontSize, changeState }) => {
  if (hasMark(state)) {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return state
        .transform()
        .removeMark(getMark(state))
        .addMark(createMark(fontSize))
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.')
  }

  else {
    if (state.isExpanded) {
      // Change outerState to update the input font size number.
      changeState({ fontSize })
      return state
        .transform()
        .addMark(createMark(fontSize))
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.')
  }

  return state
}

const fontSizeLocationStrategy = ({ state, fontSize }) => hasMark(state) ?
    Number(getMark(state).data.get('fontSize')) :
    Number(fontSize)

export const fontSizeIncrease = ({ state, fontSize, changeState }) => (
  fontSizeStrategy({
    state,
    changeState,
    fontSize: fontSizeLocationStrategy({ state, fontSize }) + 1,
  })
)

export const fontSizeDecrease = ({ state, fontSize, changeState }) => (
  fontSizeStrategy({
    state,
    changeState,
    fontSize: fontSizeLocationStrategy({ state, fontSize }) - 1,
  })
)

