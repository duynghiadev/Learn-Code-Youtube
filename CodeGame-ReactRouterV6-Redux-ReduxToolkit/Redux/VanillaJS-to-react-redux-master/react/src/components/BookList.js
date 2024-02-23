import React, { PropTypes } from 'react';
import Book from './Book';

const BookList = ({ books, editBook, deleteBook}) => {	

	return (
		<tbody id="container">
		   {
		   	books.map((book)=> {
		   		return (
		   			<Book
		   				key={book.id}
		   				book = {book}
		   				editBook = {editBook}
		   				deleteBook = {deleteBook}
		   			/>
		   		);
		   	})
		   }
		</tbody>
	);	
		
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
	editBook: PropTypes.func.isRequired,
	deleteBook: PropTypes.func.isRequired
};

export default BookList;