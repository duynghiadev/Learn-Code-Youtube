import { UPDATE, RESET } from './actionTypes'

const update = data => ({
  type: UPDATE,
  data,
})

const reset = data => ({
  type: RESET,
  data,
})

export default { update, reset }
