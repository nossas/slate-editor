import React from 'react'

import FontFamilyList from './FontFamilyList'

const FontFamilyMark = ({ children, mark: { data } }) => (
  <span style={{ fontFamily: FontFamilyList[data.get('fontFamilyIndex')].name }}>
    {children}
  </span>
)

export default FontFamilyMark
