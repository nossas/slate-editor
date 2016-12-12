export const hasMark = state => state.marks.some(mark => mark.type === 'font-family')
export const getMark = state => state.marks.filter(mark => mark.type === 'font-family').first()

export const createMark = fontFamilyIndex => ({
  type: 'font-family',
  data: { fontFamilyIndex },
})

export const reapplyMark = ({ state, fontFamilyIndex }) => state
  .transform()
  .removeMark(getMark(state))
  .addMark(createMark(fontFamilyIndex))
  .focus()
  .apply()

export const applyMark = ({ state, fontFamilyIndex }) => state
  .transform()
  .addMark(createMark(fontFamilyIndex))
  .focus()
  .apply()

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {int} fontFamilyIndex
 */
export const fontFamilyMarkStrategy = attributes => {
  const { state } = attributes

  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark(attributes)
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (state.isExpanded) {
      return applyMark(attributes)
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark')
  }

  return state
}
