export const hasGrid = state => state.blocks.some(
  block => !!state.document.getClosest(block.key, parent => parent.type === 'grid')
)

export const appendGrid = change => change
  .setBlock('grid-cell')
  .wrapBlock('grid')
  .wrapBlock('grid-row')
  .focus()

export const splitRow = change => change
  .splitBlock(2)
  .focus()
