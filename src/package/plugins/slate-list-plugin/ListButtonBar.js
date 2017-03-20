import React from 'react'

import { UnorderedListButton, OrderedListButton } from './'
// FIXME: Needs to handle assets files to work with SSR
if (require('exenv').canUseDOM) require('./ListButtonBar.css')


const ListButtonBar = props => (
  <div className="slate-list-plugin--button-bar">
    <UnorderedListButton {...props} />
    <OrderedListButton {...props} />
  </div>
)

export default ListButtonBar
