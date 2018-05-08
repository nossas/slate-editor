import { isFunction } from './type-check'

describe('[@slate-editor/utils] type-check', () => {
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
