import { countEvenNumbers, isOddNumber } from './main.js'

const expect = chai.expect

describe('function isOddNumber()', () => {
  it('should be true if 3', () => {
    const result = isOddNumber(3)
    expect(result).to.be.true
  })

  it('should be true if 2', () => {
    const result = isOddNumber(2)
    expect(result).to.be.false
  })
})

describe('function countEvenNumbers()', () => {
  before(() => {})

  after(() => {})

  beforeEach(() => {})

  afterEach(() => {})

  it('should equal 0 if null', () => {
    const result = countEvenNumbers(null)
    expect(result).to.equal(0)
  })

  it('should equal 0 if []', () => {
    const result = countEvenNumbers([])
    expect(result).to.equal(0)
  })

  it('should equal 1 if [1,2,3]', () => {
    const result = countEvenNumbers([1, 2, 3])
    expect(result).to.equal(1)
  })

  it('should equal 2 if [1,2,3,4]', () => {
    const result = countEvenNumbers([1, 2, 3, 4])
    expect(result).to.equal(2)
  })
})
