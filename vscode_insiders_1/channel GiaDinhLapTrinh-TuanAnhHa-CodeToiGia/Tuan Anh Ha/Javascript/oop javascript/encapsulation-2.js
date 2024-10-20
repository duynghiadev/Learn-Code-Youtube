// Sử dụng ES6

class BankAccount {
  constructor(initialBalance) {
    // Biến private
    let _balance = initialBalance

    // Phương thức public: getter và setter
    this.getBalance = function () {
      return _balance
    }

    this.deposit = function (amount) {
      if (amount > 0) {
        _balance += amount
        console.log(`Deposited ${amount}. New balance: ${_balance}`)
      } else {
        console.log('Invalid deposit amount.')
      }
    }

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount
        console.log(`Withdrawn ${amount}. New balance: ${_balance}`)
      } else {
        console.log('Invalid withdrawal amount or insufficient funds.')
      }
    }
  }
}

// Tạo một đối tượng BankAccount
let myAccount = new BankAccount(1000)

// Truy cập thông tin và thực hiện các giao dịch
console.log(`Initial balance: ${myAccount.getBalance()}`)
myAccount.deposit(500)
myAccount.withdraw(200)
myAccount.withdraw(900)
myAccount.withdraw(2000) // Số tiền rút vượt quá số dư

// In ra số dư cuối cùng
console.log(`Final balance: ${myAccount.getBalance()}`)
