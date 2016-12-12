import React from 'react'
import Utils from '../Utils'


describe('Utils', () => {

  describe('cloneElement(children, props)', () => {

    it('returns undefined if passed children undefined', () => {
      expect(Utils.cloneElement(undefined, {})).toEqual(undefined)
    })
  })
})
