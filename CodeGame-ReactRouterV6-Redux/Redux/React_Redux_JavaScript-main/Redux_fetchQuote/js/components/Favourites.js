import React from "react";

const Favourites = ({favQuote}) => (
    <ul>
        {favQuote.map((el, idx) => {
            console.log(el)
            return <li key={idx}>{el.quote}</li>
        })}
    </ul>
);

export default Favourites;