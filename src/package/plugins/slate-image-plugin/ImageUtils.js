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

export const updateInlineImage = ({
  state,
  data: { src, title, href, openExternal },
}) => {
  return href
    ? state
      .transform()
      .setInline({
        type: 'imageLink',
        isVoid: true,
        data: { src, title, href, openExternal }
      })
      .apply()
    : state
      .transform()
      .setInline({
        type: 'image',
        isVoid: true,
        data: { src, title, openExternal }
      })
      .apply()
}

export const deleteInlineImage = ({ state }) => {
  return state
      .transform()
      .deleteBackward(1)
      .apply()
}

export const forceClickUploadButton = editor => {
  window.document.getElementById(
    `slate-image-plugin-button-${editor.props.outerState.uid}`
  ).click()
}
