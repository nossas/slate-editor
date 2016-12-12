import React from 'react'

import { UnorderedListButton, OrderedListButton } from './'
import './ListButtonBar.css'


const ListButtonBar = props => (
  <div className="slate-list-plugin--button-bar">
    <UnorderedListButton {...props} />
    <OrderedListButton {...props} />
  </div>
)

export default ListButtonBar
