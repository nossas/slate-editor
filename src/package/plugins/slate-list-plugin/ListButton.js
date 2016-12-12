import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import {
  unorderedListStrategy,
  orderedListStrategy,
  isUnorderedList,
  isOrderedList,
} from './ListUtils'
import './ListButton.css'


const ListButton = ({ state, onChange, changeState, className, style }) => (
  <div className="slate-list-plugin--buttons-bar">
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

    <button
      style={style}
      onClick={e => onChange(orderedListStrategy(state, 'ordered-list'))}
      className={classnames(
        'slate-list-plugin--button',
        { active: isOrderedList(state) },
        className,
      )}
    >
      <FontAwesome name="list-ol" />
    </button>
  </div>
)

export default ListButton
