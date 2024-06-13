import '../style/common.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "../components/slider/slider"
import CardSwiper from "../components/cardSwiper/cardSwiper"
import { Container } from "react-bootstrap"
import CustomCard from '../components/card/customCard';
import { SwiperSlide } from 'swiper/react';
import { topList, trendList } from '../features/homeSlice';
import { moviesList } from '../features/moviesListSlice';
import { seriesList } from '../features/seriesListSlice';
import MainTitle from '../components/mainTitle/mainTitle';
import { moviesTopParams, seriesTopParams, trendParams, moviesParams, seriesParams } from '../ِAPI/config';
import "react-loading-skeleton/dist/skeleton.css";


const Home = () => {
  const dispatch = useDispatch();
  let topMovies = useSelector((state) => state.home.movies);
  let topSeries = useSelector((state) => state.home.series);
  let trending = useSelector((state) => state.home.trend);
  let movies = useSelector((state) => state.moviesList);
  let series = useSelector((state) => state.seriesList);



  useEffect(() => {

    dispatch(topList(moviesTopParams));
    dispatch(topList(seriesTopParams));
    dispatch(trendList(trendParams));
    dispatch(moviesList(moviesParams));
    dispatch(seriesList(seriesParams));

  }, [dispatch])



  return (
    <>
      <Slider slides={trending.list.slice(0, 4)} />
      <div className='page'>
        <Container>

          <section>
            <MainTitle>top movies</MainTitle>
            <CardSwiper >
              {topMovies.list.map((ele) => {
                return (
                  <SwiperSlide key={ele.id}>
                    <CustomCard type={"movie"} cardData={ele} />
                  </SwiperSlide>)
              })}
            </CardSwiper>
          </section>



          <section>
            <MainTitle>movies</MainTitle>
            <div className="sectionCard">
              {movies.list.map((ele) => {
                return (<CustomCard key={ele.id} type={"movie"} cardData={ele} />)
              })}
            </div>
          </section>


          <section>
            <MainTitle>top series</MainTitle>
            <CardSwiper >
              {topSeries.list.map((ele) => {
                return (
                  <SwiperSlide key={ele.id}>
                    <CustomCard type={"series"} cardData={ele} />
                  </SwiperSlide>)
              })}
            </CardSwiper>
          </section>


          <section>
            <MainTitle>series</MainTitle>
            <div className="sectionCard">
              {series.list.map((ele) => {
                return (<CustomCard key={ele.id} type={"series"} cardData={ele} />)
              })}
            </div>
          </section>


        </Container>
      </div>
    </>
  )
}

export default Home