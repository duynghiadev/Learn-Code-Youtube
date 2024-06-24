export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Duy Nghia Dev',
          age: 22,
          address: 'Da Nang'
        },
        status: 200
      })
    }, 1500)
  })
}
