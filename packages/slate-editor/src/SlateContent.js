import React from 'react'
import classnames from 'classnames'
import { Editor } from 'slate-react'

//
// Nodes
//
import { AlignmentNode } from '@slate-editor/alignment-plugin'
import { EmbedNode } from '@slate-editor/embed-plugin'
import { GridNode, GridRowNode, GridCellNode } from '@slate-editor/grid-plugin'
import { ImageNode, ImageLinkNode } from '@slate-editor/image-plugin'
import { LinkNode } from '@slate-editor/link-plugin'
import { ListItemNode, OrderedListNode, UnorderedListNode } from '@slate-editor/list-plugin'

//
// Marks
//
import { BoldMark } from '@slate-editor/bold-plugin'
import { ColorMark } from '@slate-editor/color-plugin'
import { FontFamilyMark } from '@slate-editor/font-family-plugin'
import { FontSizeMark } from '@slate-editor/font-size-plugin'
import { ItalicMark } from '@slate-editor/italic-plugin'
import { StrikethroughMark } from '@slate-editor/strikethrough-plugin'
import { UnderlineMark } from '@slate-editor/underline-plugin'

/* eslint-disable default-case */
export const renderNode = props => {
  switch (props.node.type) {
    case 'alignment': return <AlignmentNode {...props} />
    case 'embed': return <EmbedNode {...props} />
    case 'grid': return <GridNode {...props} />
    case 'grid-row': return <GridRowNode {...props} />
    case 'grid-cell': return <GridCellNode {...props} />
    case 'image': return <ImageNode {...props} />
    case 'imageLink': return <ImageLinkNode {...props} />
    case 'link': return <LinkNode {...props} />
    case 'list-item': return <ListItemNode {...props} />
    case 'ordered-list': return <OrderedListNode {...props} />
    case 'unordered-list': return <UnorderedListNode {...props} />
  }
}

export const renderMark = props => {
  switch (props.mark.type) {
    case 'bold': return <BoldMark {...props} />
    case 'color': return <ColorMark {...props} />
    case 'font-family': return <FontFamilyMark {...props} />
    case 'font-size': return <FontSizeMark {...props} />
    case 'italic': return <ItalicMark {...props} />
    case 'strikethrough': return <StrikethroughMark {...props} />
    case 'underline': return <UnderlineMark {...props} />
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
        outerState={outerState}
        style={style}
        renderNode={renderNode}
        renderMark={renderMark}
        {...rest}
      />
      {children}
    </div>
  )
}
