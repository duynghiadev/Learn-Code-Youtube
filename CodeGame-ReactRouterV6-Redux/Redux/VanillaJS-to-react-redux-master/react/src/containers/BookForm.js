import React, { Component, PropTypes } from 'react';

class BookForm extends Component {
	
	constructor(props) {
		super(props);
		this.saveBook = this.saveBook.bind(this);
	}

	componentDidUpdate() {
		if (this.props.formVisibitly) {
			this.nodeTitle.value = this.props.formData.title;
			this.nodeAuthor.value = this.props.formData.author;
			this.nodeStatus.value = this.props.formData.status;
			this.nodeId.value = this.props.formData.id;	
		}
	}	

	saveBook() {
		let title = this.nodeTitle.value,
	 	 	author = this.nodeAuthor.value,
	 	 	status = this.nodeStatus.value,
	 	 	id = parseInt(this.nodeId.value);

		 this.props.saveBook({ title, author, status, id });
	}

	render() {
		if (!this.props.formVisibitly) return false;
		return (
			<tr id="form-row">
				<td><b>Add/Edit</b></td>
				<td><input type="text" ref={ node => { this.nodeTitle = node; } } placeholder="Book Title" name="title" /></td>
				<td><input type="text" ref={ node => { this.nodeAuthor = node; } } placeholder="Author Name" name="author" /></td>
				<td>
				    <select ref={ node => { this.nodeStatus = node;} } name="status">
				   	 <option value="READ">Read</option>
				   	 <option value="UNREAD">Unread</option>
				   </select>
				</td>
				<td>
				  <input type="hidden" ref={ node => { this.nodeId = node; } }  name="id" />
				  <button onClick={this.saveBook} id="save-btn">Save</button>
				 </td>
			</tr>
		);	
	}
	
}

BookForm.propTypes = {
	formVisibitly: PropTypes.bool.isRequired,
	formData: PropTypes.object
};

export default BookForm;