import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { orderedListStrategy, isOrderedList } from './ListUtils'

const OrderedListButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(orderedListStrategy(state.change(), 'ordered-list'))}
    className={classnames(
      'slate-list-plugin--button',
      { active: isOrderedList(state) },
      className,
    )}
  >
    <FontAwesome name="list-ol" />
  </Button>
)

export default OrderedListButton
