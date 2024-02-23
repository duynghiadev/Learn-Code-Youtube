const filterType = (state = 'ALL', action) => {
	switch (action.type) {
		case 'CHANGE_FILTER_STATUS':
			return action.filterType;
		default:
			return state;		

	}
}

export default filterType;