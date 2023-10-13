import React from 'react'
import {useSelector} from 'react-redux'

function Aside()
{
	
	const {user} = useSelector(state => state.auth)
	
	return (<aside className="main-sidebar sidebar-dark-primary elevation-4">
		<a href="index3.html" className="brand-link">
			<span className="brand-text font-weight-light">Code Love</span>
		</a>
		<div className="sidebar">
			<div className="user-panel mt-3 pb-3 mb-3 d-flex">
				<div className="info">
					<a href="#" className="d-block">
						{user.username}
					</a>
				</div>
			</div>
			<nav className="mt-2">
				<ul
					className="nav nav-pills nav-sidebar flex-column"
					data-widget="treeview"
					role="menu"
					data-accordion="false"
				>
					<li className="nav-item menu-open">
						<a href="#" className="nav-link active">
							<i className="nav-icon fas fa-tachometer-alt" />
							<p>List User</p>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</aside>)
}

export default Aside
