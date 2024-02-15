let bookID = 1;
export const addBook = (title, author, status) => ({
	type: 'ADD_BOOK',
	id: bookID++,
	title,
	author,
	status
})

export const editBook = (title, author, status, id) => ({
	type: 'EDIT_BOOK',
	title,
	author,
	status,
	id
})

export const deleteBook = id => ({
	type: 'DELETE_BOOK',
	id
})

export const fetchBookList = () => (dispatch) => {
	setTimeout(()=>{
		var myBooks = [
			{
				title: 'Around the World in Eighty Days',
				author: 'Jules Verne',
				status: 'READ'
			},
			{
				title: 'Foundation Series',
				author: 'Isaac Asimov',
				status: 'UNREAD'
			}
		];
		myBooks.map(book=>dispatch(addBook(book.title, book.author, book.status)));
	}, 500);
}

export const changeFilterType = filter => ({
	type: 'CHANGE_FILTER_STATUS',
	filterType: filter
})