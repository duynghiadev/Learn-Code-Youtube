/*
* In this code:
*
* - The mergeWords function takes one argument, word.
* - It returns a function that takes nextWord as its argument.
* - If nextWord is provided, it recursively calls mergeWords with the concatenated result of word and nextWord.
* - If nextWord is not provided, it returns the final concatenated string.
* - Finally, the example usage demonstrates how to use this curried function to merge words together.
**/

function mergeWords(word) {
  // Inner curried function
  return function(nextWord) {
    // If nextWord is provided, recursively call mergeWords with the concatenated result
    if (nextWord !== undefined) {
      return mergeWords(word + ' ' + nextWord)
    }
    // If nextWord is not provided, return the final concatenated string
    return word
  }
}

// Example usage:
const result = mergeWords('Hello')('World!')('how')('are')('you?')()
console.log('Result:', result) // Output: "Hello World! how are you?"

console.log('-'.repeat(40))

const result2 = mergeWords('Hello')()
console.log('Result2 no provider string:', result2) // Output: "Hello World! how are you?"
