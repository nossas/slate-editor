import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { unorderedListStrategy, isUnorderedList } from './ListUtils'

const UnorderedListButton = ({ state, onChange, className, style }) => (
  <button
    style={style}
    onClick={e => onChange(unorderedListStrategy(state))}
    className={classnames(
      'slate-list-plugin--button',
      { active: isUnorderedList(state) },
      className,
    )}
  >
    <FontAwesome name="list-ul" />
  </button>
)

export default UnorderedListButton
