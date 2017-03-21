export const hasMark = state => state.blocks.some(node => node.type === 'alignment')
export const getMark = state => state.blocks.filter(node => node.type === 'alignment').first()
export const getType = state => state.blocks.first().type

export const alignmentMarkStrategy = (state, align) => state
  .transform()
  .setBlock({
    type: 'alignment',
    data: { align, currentBlockType: getType(state) }
  })
  .focus()
  .apply()

export const alignLeft = state => alignmentMarkStrategy(state, 'left')
export const alignCenter = state => alignmentMarkStrategy(state, 'center')
export const alignRight = state => alignmentMarkStrategy(state, 'right')
