import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Booklist from 'components/Booklist';
import Footer from 'components/Footer';
import { addBook, editBook, deleteBook, fetchBookList, changeFilterType } from 'actions/book';

const getFilterdBooks = (state) => {
	let {books, filterType} = state;

	switch (filterType) {
		case 'READ' :
			return books.filter(function(book){
		 		return (book.status === 'READ');
			});	

		case 'UNREAD' :
			return books.filter(function(book){
		 		return (book.status === 'UNREAD');
			});

	    default:
	    	return books;			
	}
};

class App extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	formVisibitly:false,
	    	formData: {
		    	title: '',
		    	author: '',
		    	status: 'READ',
		    	id: ''
	    	}
	    };
	    this.showForm = this.showForm.bind(this);
	    this.saveBook = this.saveBook.bind(this);
	    this.editBook = this.editBook.bind(this);
    }

    componentDidMount() {
    	this.props.fetchBookList();
    }

    showForm() {
    	this.setState({
    		formVisibitly: !this.state.formVisibitly
    	});
    }

    saveBook(book) {
    	if (book.id) {
    		this.props.editBook(book.title, book.author, book.status, book.id);
    	} else {
	    	this.props.addBook(book.title, book.author, book.status);
    	}

    	this.setState({
	    	formData: {
		    	title: '',
		    	author: '',
		    	status: 'READ',
		    	id: ''
	    	}
	    });
    }

    editBook(book) {
    	this.setState({
    		formVisibitly: true,
    		formData: book
    	});
    }

	render() {
		return (
			<table>
				<Header
					formVisibitly={this.state.formVisibitly}
					formData={this.state.formData}
					saveBook={this.saveBook}
					changeFilterType={this.props.changeFilterType}
					 />
				<Booklist
					books={this.props.books}
					saveBook = {this.saveBook}
					editBook={this.editBook}
					deleteBook={this.props.deleteBook} />
				<Footer
					showForm={this.showForm} />
			</table>
		);	
	}
		
}

const mapStateToProps = (state) => {
	return {
		books: getFilterdBooks(state),
		filterType: state.filterType
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilterType: (filter) => dispatch(changeFilterType(filter)),
		addBook: (title, author, status) => dispatch(addBook(title, author, status)),
		editBook: (title, author, status, id) => dispatch(editBook(title, author, status, id)),
		deleteBook: (id) => dispatch(deleteBook(id)),
		fetchBookList: () => dispatch(fetchBookList())
	};
};

App.propTypes = {
	books: PropTypes.array.isRequired,
	filterType: PropTypes.string.isRequired,
	changeFilterType: PropTypes.func,
	addBook: PropTypes.func,
	editBook: PropTypes.func,
	deleteBook: PropTypes.func,
	fetchBookList: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);