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

const c = a
  .map((item) => item.inventoryItem.inventoryLevels) // Extract inventoryLevels arrays
  .flat() // Flatten the array of arrays
  .filter((item) => item.warehouseId === b) // Filter items by warehouseId
  .reduce((acc, curr) => acc + curr.stockedQuantity, 0) // Sum up stocked quantities

console.log(c)

/**
 * In this version:
 *
 * - We use map to extract the inventoryLevels arrays from each object in a
 * - Then, we use flat to flatten the array of arrays into a single array of inventoryLevels
 * - We use filter to keep only the items with a warehouseId matching b
 * - Finally, we use reduce to sum up the stockedQuantity properties of the filtered items and store the result in c.
 */
