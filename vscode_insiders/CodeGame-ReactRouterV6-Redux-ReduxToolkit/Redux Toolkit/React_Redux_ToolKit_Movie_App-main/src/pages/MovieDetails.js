import React, { useEffect, useState } from 'react'
import Info from '../components/info/info'
import MovieStory from '../components/info/movieStory'
import Download from '../components/info/download'
import Cast from '../components/info/credits'
import Keywords from '../components/info/keywords'
import LineBR from '../components/info/lineBR'
import { Container } from 'react-bootstrap'
import { useLocation, useParams} from 'react-router-dom'
import { movieDetails, movieCast, movieKeywords } from '../features/movieDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import  TopLoadingBar  from 'react-top-loading-bar';
import { initialParams as movieParams} from '../ِAPI/config';



const MovieDetails = () => {
 const location=useLocation();
 const type = location.pathname.split("/")[1];
 const params = useParams();
 const dispatch = useDispatch();

 const endpoint = {
    movies: "/movie/" + params.id,
    series: "/tv/" + params.id,
  }

  movieParams.endpoint=endpoint[type];

  const movieKeywordsParams = {
    ...movieParams,
    endpoint: endpoint[type] + "/keywords",
  };

  const movieCastParams = {
    ...movieParams,
    endpoint: endpoint[type] + "/credits",
  };
  
  const data = useSelector((state) => state.movieDetails.data);
  const isLoading = useSelector((state) => state.movieDetails.isLoading);
  const error = useSelector((state) => state.movieDetails.error);
  const keywords = useSelector((state) => state.movieDetails.keywords);
  const cast = useSelector((state) => state.movieDetails.cast);

  
  useEffect(() => {
    dispatch(movieDetails(movieParams));
    dispatch(movieCast(movieCastParams));
    dispatch(movieKeywords(movieKeywordsParams));
  }, [])

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(isLoading ? 70 : 100)
  }, [isLoading]);

  let errorMass = (<h1 className='error minPage'>{error}</h1>);

  return (
    <div className='movieDetails'>
      {error ? errorMass:

      <>
      {data.id && <Info data={data} />}
      <Container>
        <MovieStory story={data?.overview}/>
        <LineBR />
        <Download/>
        <LineBR />
        <Cast cast={cast} />
        <LineBR />
        <Keywords keywords={keywords.keywords || keywords.results} />
      </Container>
      </>}

      {<TopLoadingBar progress={progress} waitingTime={500} loaderSpeed={300} color='#f5a623' height={3}  />}
    </div>
  )
}

export default MovieDetails