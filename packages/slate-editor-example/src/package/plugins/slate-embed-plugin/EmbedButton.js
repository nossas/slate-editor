import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { appendEmbed, hasEmbed } from './EmbedUtils'


const EmbedButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(appendEmbed(value.change()))}
    className={classnames(
      'slate-embed-plugin--button',
      { active: hasEmbed(value) },
      className,
    )}
  >
    <FontAwesome name="code" />
  </Button>
)

export default EmbedButton
