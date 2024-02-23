import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./customCard.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CustomCard = ({ cardData, type, epsnumber }) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  let moviesGenre = useSelector((state) => state.genreList.moviesCode);
  let seriesGenre = useSelector((state) => state.genreList.seriesCode);



  const mediaType={
    tv:"series",
    movie:"movies",
    series:"series",
    movies:"movies"
  }
  if (!mediaType[type]) {
    return;
  }



  let genre = cardData?.genre_ids?.slice(0, 3)?.map((ele) => {
    return (
      <span key={ele} className="cate">
        {mediaType[type] === "series" ? seriesGenre[ele] : moviesGenre[ele]}
      </span>
    );
  });

  return (
    <div className="customCard">
      <div className="cardheader">
        <span className="quality">web-dl</span>
        {epsnumber && <span className="epsnumber">20</span>}
        <span className="rating">
          <i className="fa-solid fa-star"></i>
          {cardData?.vote_average}
        </span>
      </div>
      <div className="cardbody">
        <div className="cardimg">
          <Link to={`/${mediaType[type]}/${cardData?.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${cardData?.poster_path}`}
              alt={cardData?.name || cardData?.title}
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />

            {!imageLoaded && (
              <Skeleton
                className="my-skeleton"
                baseColor={"#333"}
                highlightColor="#444"
             
              />
            )}

            <div className="cardicon">
              <i className="fa-sharp fa-solid fa-circle-play"></i>
              <span></span>
            </div>
          </Link>
        </div>
        <div className="cardcontent">
          <div className="cardtitle">{cardData?.name || cardData?.title}</div>
          <div className="cardtag">
            {cardData?.release_date && (
              <span className="year">
                {cardData?.release_date?.split("-")[0]}
              </span>
            )}
            {genre}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
