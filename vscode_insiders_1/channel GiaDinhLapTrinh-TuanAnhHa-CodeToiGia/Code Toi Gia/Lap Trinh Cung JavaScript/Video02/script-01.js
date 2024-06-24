const arr = [
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

const totalQuantity = arr.reduce((acc, curr) => {
  const total = curr.inventoryItem.inventoryLevels.reduce((subAcc, subCurr) => {
    return subAcc + subCurr.quantity
  }, 0)
  return acc + total
}, 0)

console.log('totalQuantity:', totalQuantity)
