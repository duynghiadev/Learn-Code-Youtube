const a = [
  {
    id: 1,
    name: 'nghia'
  },
  {
    id: 1,
    name: 'duynghia'
  },
  {
    id: 2,
    name: 'duynghiadev'
  }
]

// Find duplicate IDs
const findDuplicateIds = (arr) => {
  const map = {}
  const duplicates = []
  arr.forEach((item) => {
    if (map[item.id]) {
      duplicates.push(item.id)
      console.log(`🚫 Duplicate ID found: ${item.id}. Reason: ${item.id} is already in the map.`)
    } else {
      map[item.id] = true
      console.log(`✅ Unique ID found: ${item.id}`)
      console.log(`Map after adding ${item.id}:\n`, JSON.stringify(map, null, 2))
    }
  })
  return duplicates
}

// Filter out duplicates
const filteredArray = a.filter((item) => findDuplicateIds(a).indexOf(item.id) === -1)
console.log('🔍 Filtered Array:', filteredArray)

/**
 * question: explanation variable map and duplicate what mean?
 *
 * Certainly! Let me explain the variables map and duplicates in the findDuplicateIds function:
 *
 * 1. map: This variable is used to keep track of the IDs that have been encountered while iterating through the array. It serves as a data structure for efficient lookup. Here, we're using an object where the keys represent the unique IDs encountered, and the values are set to true to indicate that the ID has been encountered.
 *
 * 2. duplicates: This variable is an array that stores the IDs that are encountered more than once in the array. When we encounter an ID that already exists in the map, it means it's a duplicate, so we push that ID into the duplicates array.
 *
 * ---
 *
 * - Here's how these variables work together:
 *
 * + As we iterate through the array, for each object, we check if its ID exists in the map
 *
 * + If it does, it means the ID is a duplicate, so we push it into the duplicates array
 *
 * + If it doesn't, we add the ID to the map to mark it as encountered
 *
 * => Finally, the function returns the duplicates array containing all the IDs that appeared more than once in the original array.
 */
