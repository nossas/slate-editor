import React from 'react'
import { shallow } from 'enzyme'
import SlateEditor from './SlateEditor'

describe('package/slate-editor/SlateEditor.spec.js', () => {
  const wrapper = shallow(<SlateEditor />)

  it('renders without crashing', () => {
    expect(wrapper.find('.editor--root').length).toBe(1)
  })
})
