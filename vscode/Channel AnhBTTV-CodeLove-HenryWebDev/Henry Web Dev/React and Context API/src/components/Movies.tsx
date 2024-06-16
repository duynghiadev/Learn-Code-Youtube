import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, Fragment, useContext, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { ThemeContext } from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		movieChip: {
			fontSize: '2rem',
			padding: '30px 10px',
			margin: '5px'
		},
		movieInput: {
			marginRight: '5px'
		}
	})
)

const Movies = () => {
	const classes = useStyles()

	// state
	const [movie, setMovie] = useState('')

	const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMovie(event.target.value)
	}

	// context
	const { theme } = useContext(ThemeContext)
	const { movies, addMovie, deleteMovie } = useContext(MovieContext)

	const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>

	return (
		<Fragment>
			<Box display='flex' justifyContent='center' my={5}>
				<TextField
					label='Your favourite movie...'
					variant='outlined'
					className={classes.movieInput}
					onChange={onMovieInputChange}
					value={movie}
				/>
				<Button
					variant='contained'
					color='primary'
					onClick={() => {
						addMovie(movie)
						setMovie('')
					}}
				>
					Add
				</Button>
			</Box>

			<Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
				{movies.map(movie => (
					<Chip
						key={movie.id}
						label={movie.title}
						clickable
						color={chipTheme}
						onDelete={deleteMovie.bind(this, movie.id)}
						className={classes.movieChip}
					/>
				))}
			</Box>
		</Fragment>
	)
}

export default Movies
