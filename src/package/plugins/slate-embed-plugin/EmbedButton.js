import React from 'react'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

import { Button} from '../../components/button'
import { appendEmbed, hasEmbed } from './EmbedUtils'


const EmbedButton = ({ state, onChange, changeState, className, style }) => (
  <Button
    style={style}
    onClick={e => onChange(appendEmbed(state))}
    className={classnames(
      'slate-embed-plugin--button',
      { active: hasEmbed(state) },
      className,
    )}
  >
    <FontAwesome name="code" />
  </Button>
)

export default EmbedButton
