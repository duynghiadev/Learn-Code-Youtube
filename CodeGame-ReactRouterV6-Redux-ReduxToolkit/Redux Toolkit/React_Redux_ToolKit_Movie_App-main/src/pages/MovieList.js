import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from "react-bootstrap"
import CustomCard from '../components/card/customCard';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/pagination/pagination';
import MainTitle from '../components/mainTitle/mainTitle';
import  TopLoadingBar  from 'react-top-loading-bar';
import { moviesList } from '../features/moviesListSlice';
import { useState } from 'react';
import { initialParams as movieParams} from '../ِAPI/config';


const MovieList = () => {

  let location = useLocation();
  let type = location.pathname.split("/")[1];
  let searchParams = new URLSearchParams(location.search);
  let category = searchParams.get("category")
  let page = searchParams.get("page")
  let query = searchParams.get("query")

 let endpoint = {
    movies: "/discover/movie",
    series: "/discover/tv",
    search: "/search/multi"
  }

  movieParams.endpoint=endpoint[type];
  movieParams.queryParameters.page=page;
  movieParams.queryParameters.query=query;
  movieParams.queryParameters.with_genres=category;


  const dispatch = useDispatch();
  let movies = useSelector((state) => state.moviesList.list);
  let isLoading = useSelector((state) => state.moviesList.isLoading);
  let error = useSelector((state) => state.moviesList.error);
  let total_results = useSelector((state) => state.moviesList.total_results);
  let seriesGenre = useSelector((state) => state.genreList.seriesCode);
  let moviesGenre = useSelector((state) => state.genreList.moviesCode);



  useEffect(() => {
    dispatch(moviesList(movieParams));
  }, [location,dispatch])

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(isLoading ? 70 : 100)
  }, [isLoading]);
  
  const notFound = (<h1 className='noResults'>No results found</h1>);
  const errorMass = (<h1 className='error'>{error}</h1>);
  const searchRes = (<h1 className='searchRes'>Search results for {query}</h1>)
  const moviesCategory = (<h1 className='categoryTitle'>{moviesGenre[category]}</h1>);
  const seriesCategory = (<h1 className='categoryTitle'>{seriesGenre[category]}</h1>);



  return (
    <div className='page' >

      <Container>
        <section>
          <MainTitle>{type}</MainTitle>
          {(type === "movies" ?? category) && moviesCategory}
          {(type === "series" ?? category) && seriesCategory}
          {type === "search" && searchRes}
          {<TopLoadingBar progress={progress} waitingTime={500} loaderSpeed={300} color='#f5a623' height={3}  />}

          {
            error ? errorMass
              :

                ((total_results??true)||isLoading) ?
                  <div className="sectionCard">
                    {movies.map((ele) => {
                      return (<CustomCard key={ele.id} type={ele?.media_type || type} cardData={ele} />)
                    })}
                  </div>

                  : notFound
                  
          }
        </section>

        {!error && <Pagination />}

      </Container>

    </div>
  )
}

export default MovieList