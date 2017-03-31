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

export const forceClickUploadButton = editor => {
  window.document.getElementById(
    `slate-image-plugin-button-${editor.props.outerState.uid}`
  ).click()
}
