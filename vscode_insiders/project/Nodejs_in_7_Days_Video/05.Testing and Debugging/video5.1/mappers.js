const loans = (loansArr = [], booksArr = [], usersArr = []) => {
  return loansArr.map(({ bookId, userId }) => {
    const book = booksArr.find((book) => book.id === bookId)
    const user = usersArr.find((user) => user.id === userId)

    return {
      book,
      user
    }
  })
}

module.exports = { loans }
