export const typeFilter = mark => mark.type === 'color'
export const hasMark = value => value.marks.some(typeFilter)
export const getMarks = value => value.marks.filter(typeFilter)
export const getMark = value => value.marks.filter(typeFilter).first()

export const createMark = rgba => ({
  type: 'color',
  data: { rgba },
})

export const reapplyMark = ({ change, rgba }) => {
  // remove all nested color marks
  getMarks(change.value).map(mark => change.removeMark(mark))

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
 *    @property {Value} value
 *    @property {Object} rgba
 *        @property {int} r
 *        @property {int} g
 *        @property {int} b
 *        @property {int} a
 */
export const colorMarkStrategy = attributes => {
  const { value, rgba } = attributes
  const { selection } = value

  if (hasMark(value)) {
    if (selection.isExpanded) {
      return reapplyMark({change: value.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (selection.isExpanded) {
      return applyMark({change: value.change(), rgba})
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark')
  }

  return value.change()
}
