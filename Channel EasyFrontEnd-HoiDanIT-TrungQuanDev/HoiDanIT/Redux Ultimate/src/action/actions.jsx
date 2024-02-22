import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './types'

export const increaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT
  }
}

export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest())
    try {
      const res = await axios.get('http://localhost:8080/users/all')
      const data = res && res.data ? res.data : []
      dispatch(fetchUsersSuccess(data))
    } catch (error) {
      console.log(error)
      dispatch(fetchUsersError())
    }
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: data // this is payload
  }
}

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}
