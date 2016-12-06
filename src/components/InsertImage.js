import React from 'react';

export default ({ state, onChange }) => {

  const onInsetImage = (e) => {
    e.preventDefault();

    const src = window.prompt('Enter the URL of the image:')
    onChange(state
      .transform()
      .insertInline({
        type: 'image',
        isVoid: true,
        data: { src }
      })
      .apply())
  }

  return (
    <button onClick={onInsetImage}>Image</button>
  )
};

export const Image = (props) => {

  const { node, state } = props

  const isFocused = state.selection.hasEdgeIn(node)

  const src = node.data.get('src')

  const className = isFocused ? 'active' : null

  return (
    <img src={src} className={className} {...props.attributes} />
  )
}
