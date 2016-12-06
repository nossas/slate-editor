import React from 'react';
import FontAwesome from 'react-fontawesome';


export default (props) => {

  const onInsertImage = e => {
    e.preventDefault();

    const src = 'https://orig06.deviantart.net/7869/f/2009/131/9/e/zubat_icon_by_the_fry_bat.gif';

    props.onChange(props
      .state
      .transform()
      .insertInline({
        type: 'image',
        isVoid: true,
        data: { src }
      })
      .apply()
    );
  };

  return (
    <button onClick={onInsertImage}>
      <FontAwesome name="image" />
    </button>
  );
};
