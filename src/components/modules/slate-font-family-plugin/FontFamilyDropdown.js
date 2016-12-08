import React from 'react'

import FontFamilyList from './FontFamilyList'
import { fontFamilyMarkStrategy } from './FontFamilyUtils'


const FontFamilyDropdown = ({ state, onChange, changeState }) => (
  <select
    onChange={({ target: { value: fontFamilyIndex } }) => {
      onChange(fontFamilyMarkStrategy({ state, fontFamilyIndex }))
    }}
  >
    {FontFamilyList.map((font, index) => (
      <option key={`slate-font-family-${index}`} value={index}>
        {font.name}
      </option>
    ))}
  </select>
)

export default FontFamilyDropdown
