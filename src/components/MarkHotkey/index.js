import React from 'react';
import keycode from "keycode";


export default (options) => {
  const { type, key } = options

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, data, state) {
      // Check that the key pressed matches our `key` option.
      if (!data.isMod || keycode(data.code) !== key) return
      // Toggle the mark `type`.
      return state
        .transform()
        .toggleMark(type)
        .apply()
    }
  }
}

export const Bold = props => <strong>{props.children}</strong>
