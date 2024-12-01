const bcrypt = require('bcrypt')

async function hashPassword(password) {
  try {
    // Generate a salt with 128-bit strength
    const saltRounds = 10 // This is the number of rounds, not the length of the salt
    const salt = await bcrypt.genSalt(saltRounds)
    console.log('::salt:', salt)

    // Hash the password using the generate salt
    const hash = await bcrypt.hash(password, salt)
    // Store the hashed password in your database
    console.log('Hashed password:', hash)

    // At this point, you can store the hash in your database
    // When verifying passwords, you'll compare the stored hash with the newly generated hash using bcrypt.compare()
  } catch (error) {
    console.error('Error hashing password:', error)
  }
}

// Call the async function
const password = 'abc123'
hashPassword(password)
