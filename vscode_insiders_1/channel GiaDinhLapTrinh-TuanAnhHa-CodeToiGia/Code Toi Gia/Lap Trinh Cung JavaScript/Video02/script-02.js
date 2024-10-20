let arr = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          quantity: 131
        },
        {
          quantity: 14
        },
        {
          quantity: 121
        }
      ]
    }
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          quantity: 131
        },
        {
          quantity: 15
        },
        {
          quantity: 120
        }
      ]
    }
  }
]

let totalQuantity = 0

// Iterate through each object in the array
for (let i = 0; i < arr.length; i++) {
  let inventoryItem = arr[i].inventoryItem
  console.log('inventoryItem:', inventoryItem)

  let inventoryLevels = inventoryItem.inventoryLevels
  console.log('inventoryLevels:', inventoryLevels)

  // Iterate through each inventory level of the current item
  for (let j = 0; j < inventoryLevels.length; j++) {
    // Add the quantity of the current inventory level to the total
    totalQuantity += inventoryLevels[j].quantity
  }
}

console.log('totalQuantity:', totalQuantity)
