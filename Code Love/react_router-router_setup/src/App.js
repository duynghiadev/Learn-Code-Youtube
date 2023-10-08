import './App.css'
import {useState} from 'react'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import About from './components/About'
import Route from './components/routes/Route'
import Link from './components/routes/Link'
import Routes from './components/routes/Routes'

// khi click component link -> component appp re-render

function App()
{

	const [flagChangePath, setFlagChangePath] = useState(true)

	const handlePathChange = () =>
		{
			setFlagChangePath(!flagChangePath)
		}

	return (<div className="App">
		<div>
			<nav>
				<ul className="menu container">
					<li>
						<Link to="/home" onHandleChangePath={handlePathChange}> Home </Link>
					</li>
					<li>
						<Link to="/news" onHandleChangePath={handlePathChange}> News </Link>
					</li>
					<li>
						<Link to="/contact" onHandleChangePath={handlePathChange}> Contact </Link>
					</li>
					<li>
						<Link to="/about" onHandleChangePath={handlePathChange}> About </Link>
					</li>
				</ul>
			</nav>

			<div className="container">

				<Routes> <Route
					path="/home" element={<Home />} /> {/* Route({path: '/home', element: <Home />}) */}

					<Route
						path="/news" element={<News />} /> {/* Route({path: '/news', element: <News />}) */}

					<Route
						path="/contact"
						element={<Contact />} /> {/* Route({path: '/contact', element: <Contact />}) */}

					<Route
						path="/about"
						element={<About />} /> {/* Route({path: '/about', element: <About />}) */}
				</Routes>


			</div>
		</div>
	</div>)
}

export default App
