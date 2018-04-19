import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import { Button } from 'slate-editor-components'

import { orderedListStrategy, isOrderedList } from './ListUtils'

const OrderedListButton = ({ value, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(orderedListStrategy(value.change(), 'ordered-list'))}
    className={classnames(
      'slate-list-plugin--button',
      { active: isOrderedList(value) },
      className,
    )}
  >
    <FontAwesome name="list-ol" />
  </Button>
)

export default OrderedListButton
