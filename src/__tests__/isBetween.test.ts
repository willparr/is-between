import {isBetween} from '../index'

test('should handle positive values', () => {
  expect(isBetween(2, 1, 3)).toBe(true)
  expect(isBetween(4, 1, 3)).toBe(false)
})

test('should handle positive values inclusive', () => {
  expect(isBetween(1, 1, 3, true)).toBe(true)
  expect(isBetween(2, 1, 3, true)).toBe(true)
  expect(isBetween(4, 1, 3, true)).toBe(false)
})

test('should handle negative values', () => {
  expect(isBetween(-2, -3, -1)).toBe(true)
  expect(isBetween(-4, -3, -1)).toBe(false)
})

test('should handle negative values inclusive', () => {
  expect(isBetween(-3, -3, -1, true)).toBe(true)
  expect(isBetween(-4, -3, -1, true)).toBe(false)
  expect(isBetween(-2, -3, -1, true)).toBe(true)
})