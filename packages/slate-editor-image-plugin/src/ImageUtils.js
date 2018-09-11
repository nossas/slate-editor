export const insertInlineImage = ({ change, src }) => {
  return change
  .insertInline({
    type: 'image',
    isVoid: true,
    data: { src }
  })
}

export const updateInlineImage = ({
  change,
  data: { src, title, href, openExternal },
}) => {
  return href
    ? change
      .setInlines({
        type: 'imageLink',
        isVoid: true,
        data: { src, title, href, openExternal }
      })
    : change
      .setInlines({
        type: 'image',
        isVoid: true,
        data: { src, title, openExternal }
      })
}

export const deleteInlineImage = ({ change }) => {
  return change
      .deleteBackward(1)
}

export const forceClickUploadButton = editor => {
  window.document.getElementById(
    `slate-image-plugin-button-${editor.props.outerState.uid}`
  ).click()
}
