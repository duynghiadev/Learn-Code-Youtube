import React from 'react'

import Aside from '../components/Aside'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function AdminLayout(props)
{
	return (<div className="wrapper">
		<NavBar /> <Aside /> {props.children} <Footer />
	</div>)
}

export default AdminLayout
