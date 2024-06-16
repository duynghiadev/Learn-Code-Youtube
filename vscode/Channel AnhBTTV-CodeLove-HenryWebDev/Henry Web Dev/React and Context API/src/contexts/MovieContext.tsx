import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface MovieContextProps {
	children: ReactNode
}

interface Movie {
	id: string
	title: string
}

export interface MovieContextDefault {
	movies: Movie[]
	addMovie: (title: string) => void
	deleteMovie: (id: string) => void
}

const movieContextDataDefault = {
	movies: [],
	addMovie: () => {},
	deleteMovie: () => {}
}

export const MovieContext = createContext<MovieContextDefault>(
	movieContextDataDefault
)

const MovieContextProvider = ({ children }: MovieContextProps) => {
	const [movies, setMovies] = useState<Movie[]>(movieContextDataDefault.movies)

	const addMovie = (title: string) =>
		setMovies([...movies, { id: uuidv4(), title }])

	const deleteMovie = (id: string) =>
		setMovies(movies.filter(movie => movie.id !== id))

	const movieContextData = {
		movies,
		addMovie,
		deleteMovie
	}

	return (
		<MovieContext.Provider value={movieContextData}>
			{children}
		</MovieContext.Provider>
	)
}

export default MovieContextProvider
