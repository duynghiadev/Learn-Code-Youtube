const { loans } = require('../mappers')

describe('loans()', () => {
  test('it should return an Array', () => {
    expect(loans()).toBeInstanceOf(Array)
  })

  test('the output length should match the input length', () => {
    const loansArr = new Array(10).fill({})

    expect(loans(loansArr).length).toBe(loansArr.length)
  })

  test("returned objects should have a 'user' and 'book' property", () => {
    const loansArr = [
      {
        bookId: 0,
        userId: 0
      }
    ]

    const result = loans(loansArr)

    expect(result[0]).toHaveProperty('user')
    expect(result[0]).toHaveProperty('book')
  })

  test('it correctly maps a book to a loan', () => {
    const loansArr = [
      {
        bookId: 0,
        userId: 0
      }
    ]

    const booksArr = [
      {
        id: 0,
        title: 'The Art of War'
      }
    ]

    const result = loans(loansArr, booksArr)

    expect(result[0].book).toEqual(booksArr[0])
  })

  test('it correctly maps a user to a loan', () => {
    const loansArr = [
      {
        bookId: 0,
        userId: 0
      }
    ]

    const usersArr = [
      {
        id: 0,
        name: 'Bob Jones'
      }
    ]

    const result = loans(loansArr, undefined, usersArr)

    expect(result[0].user).toEqual(usersArr[0])
  })

  test('it maps books and users to loans', () => {
    const loansArr = [
      {
        bookId: 0,
        userId: 0
      }
    ]

    const booksArr = [
      {
        id: 0,
        title: 'The Art of War'
      }
    ]

    const usersArr = [
      {
        id: 0,
        name: 'Bob Jones'
      }
    ]

    const result = loans(loansArr, booksArr, usersArr)

    expect(result[0].book).toEqual(booksArr[0])
    expect(result[0].user).toEqual(usersArr[0])
  })
})
