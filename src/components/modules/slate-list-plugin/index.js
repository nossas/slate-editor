import React from 'react'
import ListSchema from './ListSchema'
import ListUtils from './ListUtils'
import ListButton from './ListButton'
import ListKeyboardShortcut from './ListKeyboardShortcut'


export default options => ({
  schema: ListSchema,

  ...ListKeyboardShortcut,
})

export {
  ListSchema,
  ListUtils,
  ListButton,
  ListKeyboardShortcut,
}
