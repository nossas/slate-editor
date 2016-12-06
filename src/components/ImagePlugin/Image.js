import React from 'react';


export default props => {

  const { node, state } = props;

  const isFocused = state.selection.hasEdgeIn(node);

  const src = node.data.get('src');

  const className = isFocused ? 'active' : null;

  return (
    <img src={src} className={className} {...props.attributes} />
  );
};
