import React from 'react'
import {cloneElement, isFunction} from '../Utils'


describe('Utils', () => {
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

  describe('isFunction', () => {
    it('returns false if object is falsey', () => {
      expect(isFunction(undefined)).toBe(false)
      expect(isFunction(null)).toBe(false)
    })

    it('returns false if object constructor is not Function', () => {
      expect(isFunction({})).toBe(false)
      expect(isFunction(new Date())).toBe(false)
      expect(isFunction(Boolean(true))).toBe(false)
      expect(isFunction('a string')).toBe(false)
    })

    it('returns true if object constructor is Function', () => {
      const func = () => {}
      expect(isFunction(func)).toBe(true)
    })
  })
})
