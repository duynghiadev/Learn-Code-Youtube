import React from "react";
import "./info.css";
const Cast = ({ cast }) => {
  return (
    <div className="cast">
      <h2>Top cast</h2>
      <ul className="castContent">
        {cast?.slice(0, 8)?.map((e) => {
          return (
            <li key={e.id}>
              <img
                src={"https://image.tmdb.org/t/p/w185/" + e.profile_path}
                alt=""
              />
              <p>
                {e.name}
                <span>{e.character}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
