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

export const fontSizeStrategy = ({ state, fontSize, changeState }) => {
  if (hasInline(state)) {
    if (state.isExpanded) {
      changeState({ fontSize })
      return state
        .transform()
        .unwrapInline(getInline(state))
        .wrapInline({
          type: 'font-size',
          data: { fontSize },
        })
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/ inline.')
  }

  else {
    if (state.isExpanded) {
      changeState({ fontSize })
      return state
        .transform()
        .wrapInline({
          type: 'font-size',
          data: { fontSize },
        })
        .focus()
        .apply()
    }
    else console.info('[SlateJS][FontSizePlugin] selection collapsed, w/o inline.')
  }

  return state
}

/**
 * Strategy that decides how increase font size node needs to be applied.
 *
 * @param {Object}
 *    @property {State} state
 *    @property {int} fontSize
 *    @property {function} changeState
 */
export const fontSizeNodeIncreaseStrategy = ({ state, fontSize, changeState }) => {
  const size = hasInline(state) ?
    Number(getInline(state).data.get('fontSize')) :
    Number(fontSize)

  return fontSizeStrategy({
    state,
    changeState,
    fontSize: size + 1,
  })
}
