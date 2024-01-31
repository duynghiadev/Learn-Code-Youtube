/**
 * - Encapsulation in Object-Oriented Programming
 *
 * - Mô phỏng: Customer -> Bank/Secretary -> Safe
 */
class BankAccount {
  constructor(sum = 0) {
    this._balance = sum
  }
  increase() {
    ++this._balance
  }
  decrease() {
    --this._balance
  }
  check() {
    return this._balance
  }
}

const accountOne = new BankAccount()

accountOne.increase()
accountOne.increase()
accountOne.increase()
accountOne.decrease()

accountOne._balance = 1000
console.log('accountOne.check():', accountOne.check())

console.log('---------------------------------------')

class Account {
  constructor(sum = 0) {
    let _balance = sum

    this.getBalance = () => _balance
    this.increase = () => ++_balance
    this.decrease = () => --_balance
  }
  check() {
    return this.getBalance()
  }
}

const accountTwo = new Account()

accountTwo.increase()
accountTwo.increase()
accountTwo.increase()
accountTwo.decrease()

accountTwo._balance = 1000

console.log('accountTwo.check():', accountTwo.check())
console.log('accountTwo.getBalance():', accountTwo.getBalance())
console.log('---------------------------------------')
console.log('accountTwo:', accountTwo)

/**
 * Biến _balance tôi đã tạo từ accountTwo._balance = 1000 nó đang ở đâu trong bộ nhớ mà nó không in ra? Tại sao nó lại không ghi đè lên biến _balance mà tôi đã khai báo từ đầu🤷‍♀️🤷‍♀️🤷‍♀️
 *
 * Trả lời: ✅✅✅
 *
 * - Khi bạn thực hiện accountTwo._balance = 1000, bạn đang tạo ra một thuộc tính mới trên đối tượng accountTwo và không ảnh hưởng đến biến _balance nằm trong closure. Cụ thể, JavaScript tạo một thuộc tính mới trên đối tượng và gán giá trị 1000 cho nó.
 *
 * - Biến _balance trong closure không bị thay đổi vì thuộc tính _balance của accountTwo không trực tiếp liên kết với biến _balance trong closure. Điều này tạo ra một hiểu lầm khi bạn thử in giá trị của _balance trong closure.
 *
 * - Việc này sẽ in ra giá trị hiện tại của _balance được giữ trong closure và không bị ảnh hưởng bởi thuộc tính _balance mới bạn đã tạo ra.
 */
