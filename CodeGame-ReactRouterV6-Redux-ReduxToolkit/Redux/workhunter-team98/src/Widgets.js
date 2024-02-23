import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Work Hunter News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React developers opportunity has back", "Top news - 1M readers")} 
            {newsArticle("Corona Virus Update", "Top news - 881 readers")} 
            {newsArticle("Read more about Redux", "Top news - 236 readers")} 
            {newsArticle("Developers life", "Top news - .5M readers")} 
        </div>
    )
}

export default Widgets
