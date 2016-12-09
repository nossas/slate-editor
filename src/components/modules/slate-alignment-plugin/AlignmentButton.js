import React from 'react'
import FontAwesome from 'react-fontawesome'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'
import './AlignmentButton.css'


const AlignmentButton = ({ state, onChange, changeState }) => (
  <div className="slate-alignment-plugin--buttons-bar">
    <button
      className="slate-alignment-plugin--button"
      onClick={e => {
        e.preventDefault()
        onChange(alignmentMarkStrategy(state, 'left'))
      }}
      data-active={hasMark(state) && getMark(state).data.get('align') === 'left'}
    >
      <FontAwesome name="align-left" />
    </button>

    <button
      className="slate-alignment-plugin--button"
      onClick={e => {
        e.preventDefault()
        onChange(alignmentMarkStrategy(state, 'center'))
      }}
      data-active={hasMark(state) && getMark(state).data.get('align') === 'center'}
    >
      <FontAwesome name="align-center" />
    </button>

    <button
      className="slate-alignment-plugin--button"
      onClick={e => {
        e.preventDefault()
        onChange(alignmentMarkStrategy(state, 'right'))
      }}
      data-active={hasMark(state) && getMark(state).data.get('align') === 'right'}
    >
      <FontAwesome name="align-right" />
    </button>
  </div>
)

export default AlignmentButton
