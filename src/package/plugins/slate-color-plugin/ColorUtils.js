export const typeFilter = mark => mark.type === 'color'
export const hasMark = state => state.marks.some(typeFilter)
export const getMarks = state => state.marks.filter(typeFilter)
export const getMark = state => state.marks.filter(typeFilter).first()

export const createMark = rgba => ({
  type: 'color',
  data: { rgba },
})

export const reapplyMark = ({ change, rgba }) => {
  // remove all nested color marks
  getMarks(change.state).map(mark => change.removeMark(mark))

  return change
  .addMark(createMark(rgba))
}

export const applyMark = ({ change, rgba }) => change
  .addMark(createMark(rgba))

/**
 * Strategy that decides how color mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {Object} rgba
 *        @property {int} r
 *        @property {int} g
 *        @property {int} b
 *        @property {int} a
 */
export const colorMarkStrategy = attributes => {
  const { state, rgba } = attributes

  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark({change: state.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (state.isExpanded) {
      return applyMark({change: state.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark')
  }

  return state.change()
}
