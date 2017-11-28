import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate-react'

import { AlignmentNode } from '../plugins/slate-alignment-plugin'
import { EmbedNode } from '../plugins/slate-embed-plugin'
import { GridNode, GridRowNode, GridCellNode } from '../plugins/slate-grid-plugin'
import { ImageNode, ImageLinkNode } from '../plugins/slate-image-plugin'
import { LinkNode } from '../plugins/slate-link-plugin'
import { UnorderedListNode, OrderedListNode, ListItemNode } from '../plugins/slate-list-plugin'

/* eslint-disable default-case */
export const renderNode = (props) => {
  switch (props.node.type) {
    case 'alignment': return <AlignmentNode {...props} />
    case 'embed': return <EmbedNode {...props} />
    case 'grid': return <GridNode {...props} />
    case 'grid-row': return <GridRowNode {...props} />
    case 'grid-cell': return <GridCellNode {...props} />
    case 'image': return <ImageNode {...props} />
    case 'image-link': return <ImageLinkNode {...props} />
    case 'link': return <LinkNode {...props} />
    case 'unordered-list': return <UnorderedListNode {...props} />
    case 'ordered-list': return <OrderedListNode {...props} />
    case 'list-item': return <ListItemNode {...props} />
  }
}
/* eslint-disable default-case */

export default ({
  className,
  wrapperStyle,
  style,
  value,
  outerState,
  plugins,
  onChange,
  changeState,
  children,
  ...rest
}) => {
  const { readOnly } = outerState

  return (
    <div className={classnames('editor--content', className)} style={wrapperStyle}>
      <Editor
        plugins={plugins}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        changeState={changeState}
        outerState={outerState}
        style={style}
        renderNode={renderNode}
        {...rest}
      />
      {children}
    </div>
  )
}
