import _ from 'lodash'

function userReducer(state = [], action)
{
	const newState = _.cloneDeep(state)
	
	switch (action.type) {
		case 'GET_USER_LIST':
			return action.payload
		case 'DELETE_USER':
			return newState.filter(function (item)
			{
				return item._id !== action.payload
			})
		default:
			return state
	}
}

export default userReducer
