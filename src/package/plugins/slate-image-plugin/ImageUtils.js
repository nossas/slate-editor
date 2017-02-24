export const insertInlineImage = ({ state, src }) => {
  return state
  .transform()
  .insertInline({
    type: 'image',
    isVoid: true,
    data: { src }
  })
  .apply()
}

export const forceClickUploadButton = () => {
  window.document.getElementById('slate-image-plugin-button').click()
}
