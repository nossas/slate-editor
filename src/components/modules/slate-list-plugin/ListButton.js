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
      className={classnames('slate-list-plugin--button', className)}
      style={style}
      onClick={e => {
        e.preventDefault()
        onChange(unorderedListStrategy(state))
      }}
      data-active={isUnorderedList(state)}
    >
      <FontAwesome name="list-ul" />
    </button>

    <button
      className={classnames('slate-list-plugin--button', className)}
      style={style}
      onClick={e => onChange(orderedListStrategy(state, 'ordered-list'))}
      data-active={isOrderedList(state)}
    >
      <FontAwesome name="list-ol" />
    </button>
  </div>
)

export default ListButton
