import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { unorderedListStrategy, isUnorderedList } from './ListUtils'

const UnorderedListButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(unorderedListStrategy(state.change()))}
    className={classnames(
      'slate-list-plugin--button',
      { active: isUnorderedList(state) },
      className,
    )}
  >
    <FontAwesome name="list-ul" />
  </Button>
)

export default UnorderedListButton
