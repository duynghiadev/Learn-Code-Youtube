const { sum } = require('../sum')

test('it adds two values', () => {
  expect(sum(1, 2)).toBe(3)
})
