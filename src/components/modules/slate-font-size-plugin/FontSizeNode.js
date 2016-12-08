import React from 'react'


const FontSizeNode = ({
  attributes,
  children,
  state,
  node: { data },
  editor: {
    props: {
      changeState,
      outerState: { fontSize: fontSizeOuterState },
    },
  },
}) => {
  const fontSize = data.get('fontSize')

  if (fontSizeOuterState !== fontSize) changeState({ state, fontSize })

  return (
    <span {...attributes} style={{ fontSize }}>
      {children}
    </span>
  )
}

export default FontSizeNode
