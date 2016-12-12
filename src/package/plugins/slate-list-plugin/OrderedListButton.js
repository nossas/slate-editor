import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { orderedListStrategy, isOrderedList } from './ListUtils'

const OrderedListButton = ({ state, onChange, className, style }) => (
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
)

export default OrderedListButton
