import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/Movie Row/MovieRow';
import FeaturedMovie from './components/Featured Movie/FeaturedMovie';
import Header from './components/Header/Header';
import './App.css'

export default () => {

    const [movieList, setMovieList] =  useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBalckHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async () => {
            /* pega a lista TODA de filmes */
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            /* pega o filme em DESTAQUE */
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChoosen = Math.floor(Math.random() * (originals[0].items.results?.length - 1));
            let choosen = originals[0].items.results[randomChoosen]
            let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv');
            setFeaturedData(choosenInfo);
    }

    loadAll();
   }, []); 

   useEffect(()=>{
       const scrollListener = () => {
           if(window.scrollY > 10){
               setBalckHeader(true);
           } else {
               setBalckHeader(false);
           }
       }

       window.addEventListener('scroll', scrollListener);

       return () => {
           window.removeEventListener('scroll', scrollListener);
       }
   }, []);
    return (
        <div className="page">

            <Header black={blackHeader} />

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movieList.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Feito com <span role="img" aria-label="coração">❤️</span> por <strong><a href="https://danielmachado.netlify.app" target="_blank">Daniel Machado</a></strong><br/>
                Todos os direitos de imagem reservados para <a href="https://netflix.com" target="_blank"><strong>Netflix</strong></a><br/>
                Todos os dados foram obtidos através do <a href="https://themoviedb.org" target="_blank"><strong>The Movie DB</strong></a>
            </footer>
            
            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2.gif" alt="Carregando..."/>
                </div>
            }
        </div>
    );
}