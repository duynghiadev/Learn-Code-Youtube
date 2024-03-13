const fs = require('fs/promises') // using fs promises API for async file operations

// Function to read the array from file
const readArrayFromFile = async (filename) => {
  try {
    const data = await fs.readFile(filename) // Use fs promises API for async file reading
    return data.toString().split(',').map(Number) // Convert string data to array of numbers
  } catch (error) {
    console.error('Error reading file:', error)
    return [] // Return empty array in case of error
  }
}

// Function to write array to file with index
const writeArrayToFile = async (filename, arr, index) => {
  try {
    const data = index + ': ' + arr.join(',') + '\n' // Append index and newline character
    await fs.appendFile(filename, data) // Use fs promises API to append data to file
    console.log('File updated successfully.')
  } catch (error) {
    console.error('Error writing to file:', error)
  }
}

// Function to sort and insert a number into the array
const sortAndInsertNumber = async (number, filename) => {
  try {
    let arr = await readArrayFromFile(filename) // Read array from file

    // Split the array into two parts based on the number
    const arrStart = arr.filter((item) => item <= number)
    const arrEnd = arr.filter((item) => item > number)

    // Combine the parts with the number in between
    const arrOutput = [...arrStart, number, ...arrEnd]

    // Write the updated array back to the file with index
    const currentIndex = await getCurrentIndex(filename)
    await writeArrayToFile(filename, arrOutput, currentIndex)

    // Return the sorted array
    return arrOutput
  } catch (error) {
    console.error('Error sorting and inserting number:', error)
    return []
  }
}

// Function to get the current index from the file
const getCurrentIndex = async (filename) => {
  try {
    const data = await fs.readFile(filename)
    const lines = data.toString().split('\n')
    return lines.length // Current index is the number of lines in the file
  } catch (error) {
    console.error('Error getting current index:', error)
    return 0 // Return 0 if file doesn't exist or other error occurs
  }
}

// Example usage:
sortAndInsertNumber(0, 'sapxepdayso_1.txt')
  .then((sortedArray) => console.log('Sorted array:', sortedArray))
  .catch((error) => console.error('Error:', error))
