import React, { useState } from "react";
import './MovieRow.css';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results?.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    };
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-left.png"/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-right.png"/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
               marginLeft: scrollX,
           }}>
                    {items.results?.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    )) }
                </div>
            </div>
        </div>

    );
};