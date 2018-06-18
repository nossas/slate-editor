export const hasGrid = value => value.blocks.some(
  block => !!value.document.getClosest(block.key, parent => parent.type === 'grid')
)

export const appendGrid = change => change
  .setBlocks('grid-cell')
  .wrapBlock('grid')
  .wrapBlock('grid-row')
  .focus()

export const splitRow = change => change
  .splitBlock(2)
  .focus()
