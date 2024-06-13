// Module User trong một ứng dụng quản lý người dùng

// Private data
let users = []

// Private function to generate user ID
function generateUserID() {
  return Math.floor(Math.random() * 1000)
}

// Public interface (encapsulated)
const UserModule = {
  // Public method to add a new user
  addUser: function (name, email) {
    const newUser = {
      id: generateUserID(),
      name: name,
      email: email
    }
    users.push(newUser)
    console.log(`User added: ${newUser.name} (${newUser.email})`)
    return newUser
  },

  // Public method to get user by ID
  getUserByID: function (userID) {
    const user = users.find((u) => u.id === userID)
    console.log('user getUserByID:', user)
    return user ? { ...user } : null
  },

  // Public method to display all users
  displayAllUsers: function () {
    console.log('All Users:')
    users.forEach((user) => {
      console.log('user:', user)
      console.log(`${user.name} (${user.email})`)
      console.log('--------------------------------------------------')
    })
  }
}

// Sử dụng module User trong ứng dụng
const newUser1 = UserModule.addUser('John Doe', 'john@example.com')
const newUser2 = UserModule.addUser('Alice Smith', 'alice@example.com')
console.log('--------------------------------------------------')

UserModule.displayAllUsers()
const retrievedUser_1 = UserModule.getUserByID(newUser1.id)
const retrievedUser_2 = UserModule.getUserByID(newUser2.id)

console.log('newUser1.id:', newUser1.id)
console.log('newUser2.id:', newUser2.id)
console.log('--------------------------------------------------')

console.log('Retrieved_1 User:', retrievedUser_1)
console.log('Retrieved_2 User:', retrievedUser_2)
