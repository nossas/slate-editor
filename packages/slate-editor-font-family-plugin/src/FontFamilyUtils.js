export const hasMark = value => value.marks.some(mark => mark.type === 'font-family')
export const getMark = value => value.marks.filter(mark => mark.type === 'font-family').first()

export const createMark = fontFamilyIndex => ({
  type: 'font-family',
  data: { fontFamilyIndex },
})

export const reapplyMark = ({ change, fontFamilyIndex }) => change
  .removeMark(getMark(change.value))
  .addMark(createMark(fontFamilyIndex))

export const applyMark = ({ change, fontFamilyIndex }) => change
  .addMark(createMark(fontFamilyIndex))

/**
 * Strategy that decides how font family mark plugin
 * needs to be applied.
 *
 * @param {Object} attributes
 *    @property {Value} value
 *    @property {int} fontFamilyIndex
 */
export const fontFamilyMarkStrategy = attributes => {
  const { value, fontFamilyIndex } = attributes
  const { selection } = value

  if (hasMark(value)) {
    if (selection.isExpanded) {
      return reapplyMark({change: value.change(), fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists')
  }

  else {
    if (selection.isExpanded) {
      return applyMark({change: value.change(), fontFamilyIndex})
    }
    else console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark')
  }

  return value.change()
}
