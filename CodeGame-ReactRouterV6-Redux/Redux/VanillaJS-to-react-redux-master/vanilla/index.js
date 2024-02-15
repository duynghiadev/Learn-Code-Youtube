(function(window) {
	"use strict";
	var IDIncrement = 1;
	var myBooks = [];
	var filterType = 'ALL';

	function addBook(book) {
		myBooks.push(book);
	}

	function editBook(book) {
		myBooks = myBooks.map(function(eachBook){
			 if (parseInt(book.id) === eachBook.id) {
			 	return book;
			 } else {
			 	return eachBook;
			 }
		});
	}

	function deleteBook(id) {
		myBooks = myBooks.filter(function(eachBook){
			 return !(id === eachBook.id);
		});
	}

	function changeFilterType(filter) {
		filterType = filter;
	}

	function getFilterdBooks() {
		switch (filterType) {
			case 'READ' :
				return myBooks.filter(function(eachBook){
			 		return (eachBook.status === 'READ');
				});	

			case 'UNREAD' :
				return myBooks.filter(function(eachBook){
			 		return (eachBook.status === 'UNREAD');
				});

		    default:
		    	return myBooks;			
		}
	}

	function renderToDOM() {
		var booklist = getFilterdBooks(),
			html;
		html = booklist.reduce(function(html,singleBook) {
			return html + `<tr>
							<td>${singleBook.id}</td>
							<td>${singleBook.title}</td>
							<td>${singleBook.author}</td>
							<td>${singleBook.status}</td>
							<td>
								<button onclick="showForm(${singleBook.id})">Edit</button>
								<button onclick="deleteBook(${singleBook.id})">X</button>
							</td>
						</tr>`;
		},'');

		document.getElementById('container').innerHTML = html;
	}

	function fetchBookList() {
		setTimeout(function() {
			var myBooks = [
				{
					id: IDIncrement++,
					title: 'Around the World in Eighty Days',
					author: 'Jules Verne',
					status: 'READ'
				},
				{
					id: IDIncrement++,
					title: 'Foundation Series',
					author: 'Isaac Asimov',
					status: 'UNREAD'
				}
			];
			myBooks.map(function(book){
				addBook(book);
			});
			renderToDOM();
		}, 500);
	}


	// fetch initial list
	fetchBookList();	

	/* Let cache of some dom nodes */
	var nodeTitle =document.querySelector('[name="title"]'),
		nodeAuthor =document.querySelector('[name="author"]'),
		nodeStatus =document.querySelector('[name="status"]'),
		nodeId =document.querySelector('[name="id"]'),
		formRow = document.getElementById('form-row');	

	/* add some  dom event listner */
	document.getElementById('filter').addEventListener('change', function() {
		changeFilterType(this.value);
		renderToDOM();
	});

	document.getElementById('add-btn').addEventListener('click', function() {
		if (formRow.style.display === 'none') {
			formRow.style.display = 'table-row';
		} else {
			formRow.style.display = 'none';
		}
	});

	document.getElementById('save-btn').addEventListener('click', function() {
		 var book = {
		 		title : nodeTitle.value,
		 		author : nodeAuthor.value,
		 		status : nodeStatus.value
		 	},
		 	id = parseInt(nodeId.value);

		 if (id) {
		 	book['id'] = id;
		 	editBook(book);
		 } else {
		 	book['id'] = IDIncrement++;
		 	addBook(book);
		 }

		 nodeTitle.value = '';
		 nodeAuthor.value = '';
		 nodeId.value = '';
		 renderToDOM();

	});

	function showForm(id) {
		var book = myBooks.find(function(eachBook){
			 return eachBook.id === id;
		});
		nodeTitle.value = book.title;
		nodeAuthor.value = book.author;
		nodeStatus.value = book.status;
		nodeId.value = book.id;
		formRow.style.display = 'table-row';
	}

	window.showForm = showForm;
	window.deleteBook = function(id) {
		deleteBook(id);
		renderToDOM();
	};

})(window);
