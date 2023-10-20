import { createTodo } from './logic'

const btn = document.querySelector('.btn-primary')
const inputElem = document.querySelector('#poll-input')

btn.addEventListener('click', function () {
  const value = inputElem.value
  createTodo(value)
})
