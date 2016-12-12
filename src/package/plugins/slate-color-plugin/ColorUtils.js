export const hasMark = state => state.marks.some(mark => mark.type === 'color')
export const getMark = state => state.marks.filter(mark => mark.type === 'color').first()

export const createMark = rgba => ({
  type: 'color',
  data: { rgba },
})

export const reapplyMark = ({ state, rgba }) => state
  .transform()
  .removeMark(getMark(state))
  .addMark(createMark(rgba))
  .focus()
  .apply()

export const applyMark = ({ state, rgba }) => state
  .transform()
  .addMark(createMark(rgba))
  .focus()
  .apply()

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
  const { state } = attributes

  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark(attributes)
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (state.isExpanded) {
      return applyMark(attributes)
    }
    else console.info('[SlateJS][ColorPlugin] selection collapsed, w/o mark')
  }

  return state
}

const ColorUtils = {
  hasMark,
  getMark,
  createMark,
  reapplyMark,
  applyMark,
  colorMarkStrategy,
}
export default ColorUtils
