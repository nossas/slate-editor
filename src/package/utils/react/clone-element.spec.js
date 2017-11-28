import React from 'react'
import cloneElement from './clone-element'

describe('package/utils/react/clone-element', () => {
  describe('cloneElement(children, props)', () => {
    it('returns undefined if passed children undefined', () => {
      expect(cloneElement(undefined, {})).toEqual(undefined)
    })

    it('skips undefined children', () => {
      const children = [<span></span>, undefined, <div></div>, <i></i>, undefined]

      const cloned = cloneElement(children, {})

      expect(cloned.length).toBe(3)
    })
  })
})
