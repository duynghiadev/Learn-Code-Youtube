import React, { Component, PropTypes } from 'react';

const FilterBar = (props) => {		
	let filterNode;
	return (
		<tr id="search-row" >
			<td colSpan="3"></td>
			<td>Filter</td>
			<td>
			   <select ref={(node) => filterNode = node} onChange={ () => props.changeFilterType(filterNode.value)} id="filter">
			   	 	<option value="ALL">All</option>
			   	 	<option value="READ">Read</option>
			   	 	<option value="UNREAD">Unread</option>
			   </select>
			 </td>
		</tr>
	);	
}

export default FilterBar;