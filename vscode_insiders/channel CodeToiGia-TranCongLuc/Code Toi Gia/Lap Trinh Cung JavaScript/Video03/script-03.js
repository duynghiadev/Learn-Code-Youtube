const b = 'duynghiadev'

const a = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 10,
          warehouseId: 'duynghiadev1'
        },
        {
          stockedQuantity: 50,
          warehouseId: 'duynghiadev'
        }
      ]
    }
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 10,
          warehouseId: 'duynghiadev1'
        },
        {
          stockedQuantity: 20,
          warehouseId: 'duynghiadev'
        }
      ]
    }
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 10,
          warehouseId: 'duynghiadev1'
        },
        {
          stockedQuantity: 20,
          warehouseId: 'duynghiadev'
        }
      ]
    }
  }
]

let c = 0

// Iterate through each object in array 'a'
for (let i = 0; i < a.length; i++) {
  let inventoryLevels = a[i].inventoryItem.inventoryLevels

  // Iterate through each inventory level of the current item
  for (let j = 0; j < inventoryLevels.length; j++) {
    // Check if warehouseId matches 'b'
    if (inventoryLevels[j].warehouseId === b) {
      // Add stockedQuantity to 'c'
      c += inventoryLevels[j].stockedQuantity
    }
  }
}

console.log(c)
