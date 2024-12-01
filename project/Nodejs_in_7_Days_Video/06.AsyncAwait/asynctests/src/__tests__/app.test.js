const { timeoutCallbackWithData, timeoutPromiseWithData } = require('../app')

test('the data is peanut butter', (done) => {
  timeoutCallbackWithData(1000, 'peanut butter', (data) => {
    expect(data).toBe('peanut butter')
    done()
  })
})

test('the data is still peanut butter', () => {
  return timeoutPromiseWithData(1000, 'peanut butter').then((data) => {
    expect(data).toBe('peanut butter')
  })
})

test('the method rejects jelly', () => {
  expect.assertions(1)

  return timeoutPromiseWithData(1000, 'jelly').catch((err) => {
    return expect(err).toMatchObject({
      message: 'no jelly allowed'
    })
  })
})

test('the data matches peanut butter', () => {
  expect.assertions(1)

  return expect(timeoutPromiseWithData(1000, 'extra peanut butter')).resolves.toBe(
    'extra peanut butter'
  )
})

test('rejects jelly', () => {
  expect.assertions(1)

  return expect(timeoutPromiseWithData(1000, 'jelly')).rejects.toMatchObject({
    message: 'no jelly allowed'
  })
})

test('the data matches peanut butteer', async () => {
  expect.assertions(1)

  const data = await timeoutPromiseWithData(1000, 'tasty peanut butter')

  expect(data).toBe('tasty peanut butter')
})
