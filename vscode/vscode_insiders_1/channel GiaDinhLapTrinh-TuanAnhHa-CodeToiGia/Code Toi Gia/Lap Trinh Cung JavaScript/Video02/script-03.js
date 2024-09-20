const arr = [
  {
    inventoryItem: {
      inventoryLevels: [{ quantity: 131 }, { quantity: 14 }, { quantity: 121 }]
    }
  },
  {
    inventoryItem: {
      inventoryLevels: [{ quantity: 131 }, { quantity: 15 }, { quantity: 120 }]
    }
  }
]

let totalQuantity = 0

// Iterate over each object in the array using forEach
arr.forEach((item) => {
  // Access inventoryLevels array within each object
  item.inventoryItem.inventoryLevels.forEach((level) => {
    // Add quantity of each level to totalQuantity
    totalQuantity += level.quantity
  })
})

console.log('totalQuantity:', totalQuantity)
