import { isPositive } from './01-04-main'

describe('isPositive()', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1)).toBe(true)
    expect(isPositive(2)).toBe(true)
    expect(isPositive(3)).toBe(true)
  })

  it('should return false when n = 0', () => {
    expect(isPositive(0)).toBe(false)
  })

  it('should return false when n < 0', () => {
    expect(isPositive(-1)).toBe(false)
  })
})

// ---👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇--- //

/**
 * Trong phiên bản này:
 *
 * - Chúng tôi đã định nghĩa kiểu dữ liệu cho đối số và giá trị trả về của hàm isPositive, giúp
 * TypeScript kiểm tra kiểu dữ liệu.
 *
 * - Hàm assertIsPositive cũng đã được định nghĩa với các kiểu dữ liệu đúng để đảm bảo tính kiểm tra kiểu trong TypeScript.
 *
 * - Mã kiểm tra được gọi và thực thi trong hàm testIsPositive như trước, nhưng với kiểu dữ liệu TypeScript.
 */

// function isPositive(n: number): boolean {
//   return n >= 0
// }

// function assertIsPositive(testInput: number, expected: boolean): void {
//   const actual: boolean = isPositive(testInput)
//   console.log(`Test case: isPositive(${testInput})`)
//   console.log(`Expected: ${expected}`)
//   console.log(`Actual: ${actual}`)
//   console.log(actual === expected ? 'Test passed' : 'Test failed')
//   console.log('')
// }

// function testIsPositive(): void {
//   assertIsPositive(1, true)
//   assertIsPositive(2, true)
//   assertIsPositive(3, true)
//   assertIsPositive(0, false)
//   assertIsPositive(-1, false)
// }

// // Run the test
// testIsPositive()
