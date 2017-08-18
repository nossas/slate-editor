import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { insertLinkStrategy, hasLinks } from './LinkUtils'

const LinkButton = ({ state, onChange, className, style, type }) => (
  <Button
    style={style}
    onMouseDown={e => onChange(insertLinkStrategy(state))}
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
