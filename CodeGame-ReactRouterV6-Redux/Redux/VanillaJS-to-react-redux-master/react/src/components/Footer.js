import React, {PropTypes} from 'react';

const Footer = ({ showForm }) => {
	return (
		<tfoot>
			<tr>
				<td colSpan="4"></td>
				<td><button onClick={showForm} id="add-btn">Add New</button></td>
			</tr>
		</tfoot>	
	);	
};

Footer.propTypes = {
	showForm: PropTypes.func.isRequired
}

export default Footer;