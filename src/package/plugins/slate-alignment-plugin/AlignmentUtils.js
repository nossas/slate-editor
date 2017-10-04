export const hasMark = state => state.blocks.some(node => node.type === 'alignment')
export const getMark = state => state.blocks.filter(node => node.type === 'alignment').first()
export const getType = state => state.blocks.first().type

export const alignmentMarkStrategy = (change, align) => change
  .setBlock({
    type: 'alignment',
    data: { align, currentBlockType: getType(change.state) }
  })
  .focus()

export const alignLeft = change => alignmentMarkStrategy(change, 'left')
export const alignCenter = change => alignmentMarkStrategy(change, 'center')
export const alignRight = change => alignmentMarkStrategy(change, 'right')
