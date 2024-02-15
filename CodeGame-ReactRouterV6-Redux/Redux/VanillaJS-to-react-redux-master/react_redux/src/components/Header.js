import React, {PropTypes} from 'react';
import BookForm from 'containers/BookForm';
import FilterBar from './FilterBar';
import Heading from './Heading';

const Header = (props) => {
	return (
			<thead>
			  <BookForm {...props} />
			  <FilterBar changeFilterType={props.changeFilterType} />
			  <Heading />
			</thead>
	);	
};

export default Header;