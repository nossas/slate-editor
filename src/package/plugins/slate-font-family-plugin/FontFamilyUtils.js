export const hasMark = state => state.marks.some(mark => mark.type === 'font-family')
export const getMark = state => state.marks.filter(mark => mark.type === 'font-family').first()

export const createMark = fontFamilyIndex => ({
  type: 'font-family',
  data: { fontFamilyIndex },
})

export const reapplyMark = ({ change, fontFamilyIndex }) => change
  .removeMark(getMark(change.state))
  .addMark(createMark(fontFamilyIndex))

export const applyMark = ({ change, fontFamilyIndex }) => change
  .addMark(createMark(fontFamilyIndex))

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {int} fontFamilyIndex
 */
export const fontFamilyMarkStrategy = attributes => {
  const { state, fontFamilyIndex } = attributes

  if (hasMark(state)) {
    if (state.isExpanded) {
      return reapplyMark({change: state.change(), fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (state.isExpanded) {
      return applyMark({change: state.change(), fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark')
  }

  return state.change()
}
