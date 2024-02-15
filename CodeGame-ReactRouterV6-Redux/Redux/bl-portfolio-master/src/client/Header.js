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
import ContentLoading from './ContentLoading';
import Logo from './Logo';
import 'rc-texty/assets/index.css';
import Typing from 'react-typing-animation';

export default class Header extends Component{
	constructor(props) {
		super(props);
		this.state={isLoading: true};
	}



	render(){
		return(
			<div className = "header-wide">
				<Navbar color="inverse" dark expand="md">
					<NavbarBrand><Logo/></NavbarBrand>
				</Navbar>
				<div className="header-wide-content">
					<div className="heading-text-large flex-box">
						<span>&lsaquo;b</span>
						<Typing speed={100}>
							<span>iagio&nbsp;</span>
						</Typing>
						<span>l</span>
						<Typing speed={100}>
							<div>iberto&nbsp;</div>
						</Typing>
						<span>&frasl;&rsaquo;</span>
					</div>
				</div>
				<div className="header-wide-content">
					<div className="header-wide-content-title">
						{this.props.headerData.title ? <h1>{`${this.props.headerData.title}`}</h1> : <ContentLoading/>}
					</div>
					<div className="header-wide-content-text">
						{this.props.headerData.subtitle ? <h4>{`${this.props.headerData.subtitle}`}</h4>: <ContentLoading/>}
					</div>
				</div>
				
			</div>
		)
	}
}