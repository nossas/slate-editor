export const hasGrid = state => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === 'grid')
)

export const appendGrid = state => {
  return state
    .transform()
    .setBlock('grid-cell')
    .wrapBlock('grid')
    .wrapBlock('grid-row')
    .focus()
    .apply()
}

export const splitRow = state => {
  const cell = state.blocks.filter(block => block.type === 'grid-cell').first()
  return state
    .transform()
    .splitBlock(2)
    .focus()
    .apply()
}
