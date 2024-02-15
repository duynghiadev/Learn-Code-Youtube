import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Booklist from 'components/Booklist';
import Footer from 'components/Footer';

let books = [];
let IDIncrement = 1;
const getFilterdBooks = (filterType) => {

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
	    	filterType: 'ALL',
	    	books: [],
	    	formData: {
		    	title: '',
		    	author: '',
		    	status: 'READ',
		    	id: ''
	    	}
	    };
	    this.showForm= this.showForm.bind(this);
	    this.saveBook= this.saveBook.bind(this);
	    this.editBook= this.editBook.bind(this);
	    this.deleteBook= this.deleteBook.bind(this);
	    this.changeFilterType = this.changeFilterType.bind(this);
    }

    componentDidMount() {
    	this.fetchBookList();
    }

    showForm() {
    	this.setState({
    		formVisibitly: !this.state.formVisibitly
    	});
    }

    changeFilterType(filter) {
    	this.setState({
    		filterType: filter,
	    	books: getFilterdBooks(filter)
	    });
    }

    saveBook(book) {
    	if (book.id) {
    		books = books.map(function(eachBook) {
				 if (parseInt(book.id) === eachBook.id) {
				 	return book;
				 } else {
				 	return eachBook;
				 }
			});
    	} else {
	    	books.push({
	    		...book,
	    		id: IDIncrement++
	    	});	
    	}
    	
    	this.setState({
	    	books: getFilterdBooks(this.state.filterType),
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

    deleteBook(id) {
    	books = books.filter(function(book){
			 return !(id === book.id);
		});

		this.setState({
	    	books: getFilterdBooks(this.state.filterType)
	    });
    }

   fetchBookList() {

   		function deferFn() {
			books = [
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

			this.setState({
	    		books: getFilterdBooks(this.state.filterType)
	    	});
			
		}

		setTimeout(deferFn.bind(this), 500);
	}

	render() {
		return (
			<table>
				<Header
					formVisibitly={this.state.formVisibitly}
					formData={this.state.formData}
					saveBook={this.saveBook}
					changeFilterType={this.changeFilterType}
					 />
				<Booklist
					books={this.state.books}
					saveBook = {this.saveBook}
					editBook={this.editBook}
					deleteBook={this.deleteBook} />
				<Footer
					showForm={this.showForm} />
			</table>
		);	
	}
		
}

export default App;