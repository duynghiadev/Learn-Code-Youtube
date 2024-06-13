import React, {PropTypes} from 'react';

const Book = ({ book, editBook, deleteBook}) => {
	return (
			<tr>
				<td>{book.id}</td>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td>{book.status}</td>
				<td>
					<button onClick={()=>editBook(book)}>Edit</button>
					<button onClick={ () => deleteBook(book.id)}>X</button>
				</td>
			</tr>
	);	
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	editBook: PropTypes.func.isRequired,
	deleteBook: PropTypes.func.isRequired
}

export default Book;