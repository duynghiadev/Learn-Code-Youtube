import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {addBook, editBook, deleteBook, fetchBookList, changeFilterType} from './actions/book'; 

let initialState = {};
const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);

store.subscribe(()=>{
	renderToDOM();
});

store.dispatch(fetchBookList());

const getFilterdBooks = () => {
	let state = store.getState(),
		{books, filterType} = state;

	switch (filterType) {
		case 'READ' :
			return books.filter(function(eachBook){
		 		return (eachBook.status === 'READ');
			});	

		case 'UNREAD' :
			return books.filter(function(eachBook){
		 		return (eachBook.status === 'UNREAD');
			});

	    default:
	    	return books;			
	}
};

const renderToDOM = () => {
	var booklist = getFilterdBooks(),
		html;
	html = booklist.reduce(function(html,singleBook) {
		return html + `<tr>
						<td>${singleBook.id}</td>
						<td>${singleBook.title}</td>
						<td>${singleBook.author}</td>
						<td>${singleBook.status}</td>
						<td>
							<button onclick="bookAPI.showForm(${singleBook.id})">Edit</button>
							<button onclick="bookAPI.deleteIt(${singleBook.id})">X</button>
						</td>
					</tr>`;
	},'');

	document.getElementById('container').innerHTML = html;
};

/* Let cache of some dom nodes */
const nodeTitle =document.querySelector('[name="title"]'),
	  nodeAuthor =document.querySelector('[name="author"]'),
	  nodeStatus =document.querySelector('[name="status"]'),
	  nodeId =document.querySelector('[name="id"]'),
	  formRow = document.getElementById('form-row');	

/* add some  dom event listner */
document.getElementById('filter').addEventListener('change', (e) => {
	store.dispatch(changeFilterType(e.target.value));
});

document.getElementById('add-btn').addEventListener('click', () => {
	if (formRow.style.display === 'none') {
		formRow.style.display = 'table-row';
	} else {
		formRow.style.display = 'none';
	}
});

document.getElementById('save-btn').addEventListener('click', () => {
	 let title = nodeTitle.value,
	 	 author = nodeAuthor.value,
	 	 status = nodeStatus.value,
	 	 id = parseInt(nodeId.value);

	 if (id) {
	 	store.dispatch(editBook(title, author, status, id));
	 } else {
	 	store.dispatch(addBook(title, author, status));
	 }

	 nodeTitle.value = '';
	 nodeAuthor.value = '';
	 nodeId.value = '';

});

const showForm =  (id) => {
	let books = store.getState().books,
		book = books.find( eachBook => eachBook.id === id);
	nodeTitle.value = book.title;
	nodeAuthor.value = book.author;
	nodeStatus.value = book.status;
	nodeId.value = book.id;
	formRow.style.display = 'table-row';	
}

const deleteIt = (id) => {
	store.dispatch(deleteBook(id));
};

export {showForm, deleteIt};