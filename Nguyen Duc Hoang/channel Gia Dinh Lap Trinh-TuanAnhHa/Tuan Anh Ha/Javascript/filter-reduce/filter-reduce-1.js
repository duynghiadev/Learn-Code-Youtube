// Mảng chứa đối tượng giao dịch
const transactions = [
  { user: 'Alice', amount: 150, type: 'expense' },
  { user: 'Bob', amount: 200, type: 'income' },
  { user: 'Alice', amount: 50, type: 'expense' },
  { user: 'Charlie', amount: 100, type: 'income' },
  { user: 'Bob', amount: 75, type: 'expense' },
  { user: 'Alice', amount: 300, type: 'income' }
]

const totalUserMap = (transaction) => {
  console.log('transaction:', transaction)
  console.log('----------------------------------------')

  return transaction.user
}

const totalUserFilter = (user, index, arr) => {
  console.log('arr:', arr)
  console.log('user:', user)
  console.log('index:', index)
  console.log('arr.indexOf(user):', arr.indexOf(user))
  console.log('----------------------------------------')

  return arr.indexOf(user) === index && arr.filter((u) => u === user).length >= 2
}

// Sử dụng filter để lọc người dùng có nhiều giao dịch hơn 2

// cách 1: khai báo nhanh, nhưng mà hơi khó hiểu

// const usersWithMoreThan2Transactions_2 = transactions
//   .map((transaction) => transaction.user)
//   .filter(
//     (user, index, arr) => arr.indexOf(user) === index && arr.filter((u) => u === user).length > 2
//   )

// cách 2: khai báo dài dòng, nhưng mà hơi dễ hiểu

const usersWithMoreThan2Transactions_1 = transactions.map(totalUserMap)
const usersWithMoreThan2Transactions = usersWithMoreThan2Transactions_1.filter(totalUserFilter)

console.log('Người dùng có nhiều giao dịch hơn 2:', usersWithMoreThan2Transactions)
console.log('----------------------------------------')

// Sử dụng reduce để tính tổng số tiền giao dịch của những người có nhiều giao dịch hơn 2
const totalAmountForUsers = usersWithMoreThan2Transactions.reduce((accumulator, user) => {
  console.log('user:', user)
  const transactionsForUser = transactions.filter((transaction) => transaction.user === user)
  console.log('transactionsForUser:', transactionsForUser)

  const totalAmount = transactionsForUser.reduce((sum, transaction) => {
    console.log('sum:', sum)
    console.log('transaction:', transaction)
    console.log('transaction.type:', transaction.type)
    console.log(
      'Result:',
      transaction.type === 'income' ? sum + transaction.amount : sum - transaction.amount
    )
    console.log('----------------------------------------')

    return transaction.type === 'income' ? sum + transaction.amount : sum - transaction.amount
  }, 0)
  console.log('accumulator:', accumulator)
  console.log('totalAmount:', totalAmount)
  console.log('accumulator + totalAmount:', accumulator + totalAmount)
  console.log('----------------------------------------')

  return accumulator + totalAmount
}, 0)

console.log('Tổng số tiền giao dịch của những người có nhiều giao dịch hơn 2:', totalAmountForUsers)
