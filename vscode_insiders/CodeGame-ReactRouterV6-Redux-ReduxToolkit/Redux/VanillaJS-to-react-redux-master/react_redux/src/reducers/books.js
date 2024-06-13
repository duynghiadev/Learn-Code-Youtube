const book = (state, action) => {
	switch(action.type) {
		case 'ADD_BOOK':
			return {
				id: action.id,
				title: action.title,
				author: action.author,
				status: action.status 
			};
		case 'EDIT_BOOK':
			if (parseInt(action.id) !== state.id) {
				return state;	
			}

			return {
				id: action.id,
				title: action.title,
				author: action.author,
				status: action.status 
			};
		case 'DELETE_BOOK':
			return !(parseInt(action.id) === state.id);
		default:
			return state;
	}			
}

const books = (state = [], action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return [
				...state,
				book(undefined, action)
			];

		case 'EDIT_BOOK':
			return state.map(
				(each) => book(each, action)
			);

		case 'DELETE_BOOK':
			return state.filter(
				(each) => book(each, action)
			);
		default:
			return state;		

	}
}

export default books;