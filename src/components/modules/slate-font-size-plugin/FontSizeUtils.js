export const hasInline = state => state.inlines.some(inline => inline.type === 'font-size')
export const getInline = state => state.inlines.filter(inline => inline.type === 'font-size').first()

export const createNode = fontSizeIndex => ({
  type: 'font-size',
  data: { fontSizeIndex },
})

export const reapplyNode = ({ state, fontSizeIndex }) => state
  .transform()
  .removeNode(getInline(state))
  .addNode(createNode(fontSizeIndex))
  .focus()
  .apply()

export const applyNode = ({ state, fontSizeIndex }) => state
  .transform()
  .addNode(createNode(fontSizeIndex))
  .focus()
  .apply()

/**
 * Strategy that decides how increase font size node needs to be applied.
 *
 * @param {Object} attributes
 *    @property {State} state
 *    @property {int} fontSizeIndex
 */
export const fontSizeNodeIncreaseStrategy = ({ state, fontSize }) => {
  if (hasInline(state)) {
    if (state.isExpanded) {
      const inline = getInline(state)
      return state
        .transform()
        .unwrapInline(inline)
        .wrapInline({
          type: 'font-size',
          data: { fontSize: Number(inline.data.get('fontSize')) + 1 },
        })
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.')
  }

  else {
    if (state.isExpanded) {
      return state
        .transform()
        .wrapInline({
          type: 'font-size',
          data: { fontSize: Number(fontSize) + 1 },
        })
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.')
  }

  return state
}
