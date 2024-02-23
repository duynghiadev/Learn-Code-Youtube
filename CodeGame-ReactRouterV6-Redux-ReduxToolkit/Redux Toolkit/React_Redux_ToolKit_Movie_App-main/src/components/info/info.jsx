import React from "react";
import "./info.css";
import { Container } from "react-bootstrap";

const Info = ({ data }) => {
  return (
    <div
      className="info"
      style={{
        background: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
      }}
    >
      <Container>
        <h2 className="infoTitle">{data?.title}</h2>
        <div className="infoContent">
          <img
            src={`https://image.tmdb.org/t/p/w342/${data?.poster_path}`}
            alt=""
          />
          <div className="infoDetails">
            <div className="year">
              <span>year :</span>
              <span>
                {(data?.release_date || data.first_air_date)?.split("-")[0]}
              </span>
            </div>

            {data.runtime ?
              <div className="runtime">
                <span>runtime :</span>
                <span>{data?.runtime} Minutes</span>
              </div>
              :""
            }

            {data?.number_of_seasons && (
              <div className="seasons">
                <span>number of seasons :</span>
                <span>{data?.number_of_seasons}</span>
              </div>
            )}
            {data?.number_of_episodes && (
              <div className="episodes">
                <span>number of episodes :</span>
                <span>{data?.number_of_episodes}</span>
              </div>
            )}

            <div className="rating">
              <span>rating :</span>
              <span>
                {Math.round(data?.vote_average * 10) / 10}
                <i className="fa-solid fa-star"></i>
              </span>

              {data?.tagline && (
                <div className="tagline">
                  <span>tagline :</span>
                  <span>{data?.tagline}</span>
                </div>
              )}
              <div className="genre">
                genre :
                {data?.genres?.slice(0, 5).map((e, i) => {
                  return <span key={i}>{e.name}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
