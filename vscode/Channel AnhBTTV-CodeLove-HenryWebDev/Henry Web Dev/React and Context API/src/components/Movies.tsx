import {
  Box,
  Button,
  Chip,
  PropTypes,
  TextField,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
    },
    movieChip: {
      fontSize: "2rem",
      padding: "30px 10px",
      margin: "5px",
    },
  })
);

const Movies = () => {
  // classes
  const classes = useStyles();

  // state
  const [movie, setMovie] = useState("");

  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputChange = event.target.value;
    setMovie(inputChange);
  };

  // context
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, "inherit">;
  const { addMovie, deleteMovie, movies } = useContext(MovieContext);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
