import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { insertLinkStrategy, hasLinks } from './LinkUtils'

const LinkButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onMouseDown={e => onChange(insertLinkStrategy(state.change()))}
    className={classnames(
      'slate-link-plugin--button',
      { active: hasLinks(state) },
      className,
    )}
  >
    <FontAwesome name="link" />
  </Button>
)

export default LinkButton
