import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import './app.css';
export default class ContentLoading extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className = "content-loading">Loading content...</div>
		)
	}
}