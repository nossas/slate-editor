export const hasMark = state => state.blocks.some(node => node.type === 'alignment')
export const getMark = state => state.blocks.filter(node => node.type === 'alignment').first()

export const alignmentMarkStrategy = (state, align) => {
  return state
    .transform()
    .setBlock({
      type: 'alignment',
      data: { align }
    })
    .focus()
    .apply()
}
