function authReducer(state = {isLogin: false, user: {}}, action)
{
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state, isLogin: true, user: action.payload
			}
			break
		default:
			return state
	}
}

export default authReducer
