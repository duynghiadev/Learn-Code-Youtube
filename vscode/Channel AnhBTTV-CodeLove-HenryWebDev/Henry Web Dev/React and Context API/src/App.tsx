import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './contexts/ThemeContext'
import Movies from './components/Movies'
import MovieContextProvider from './contexts/MovieContext'
import TopMovieContextProvider from './contexts/TopMovieContext'
import TopMovies from './components/TopMovies'
import { Grid } from '@material-ui/core'
import AuthContextProvider from './contexts/AuthContext'

function App() {
	return (
		<div>
			<AuthContextProvider>
				<TopMovieContextProvider>
					<MovieContextProvider>
						<ThemeContextProvider>
							<ProgressContextProvider>
								<Navbar />
								<Grid container>
									<Grid item xs={4}>
										<TopMovies />
									</Grid>
									<Grid item xs={8}>
										<Movies />
									</Grid>
								</Grid>
								<ToggleTheme />
							</ProgressContextProvider>
						</ThemeContextProvider>
					</MovieContextProvider>
				</TopMovieContextProvider>
			</AuthContextProvider>
		</div>
	)
}

export default App
