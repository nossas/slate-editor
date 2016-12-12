export const hasGrid = state => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === 'grid')
)

export const appendGrid = state => state
  .transform()
  .setBlock('grid-cell')
  .wrapBlock('grid')
  .wrapBlock('grid-row')
  .focus()
  .apply()

export const splitRow = state => state
  .transform()
  .splitBlock(2)
  .focus()
  .apply()
