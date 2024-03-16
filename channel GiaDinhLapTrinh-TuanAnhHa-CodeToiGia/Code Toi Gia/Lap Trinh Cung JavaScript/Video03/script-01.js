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

const c = a.reduce((acc, curr) => {
  const filterArr = curr.inventoryItem.inventoryLevels.filter((item) => {
    return item.warehouseId === b
  })
  console.log('filterArr:', filterArr)

  const total = filterArr.reduce((subAcc, subCurr) => {
    return subAcc + subCurr.stockedQuantity
  }, 0)

  return acc + total
}, 0)

console.log(c)
