import { chain } from 'lodash'
import jsonPlaceholder from "../lib/jsonPlaceholder"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value() // Also means `execute`
}

const fetchPosts = () =>
  async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    })
  }

const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

/**
 * !  Memoized version of the fetchUser function [NOT USED ANYMORE]
 * *  This function is deprecated and was earlier used with memoize function from lodash library.
 */
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch)
/* const _fetchUser = memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}) */