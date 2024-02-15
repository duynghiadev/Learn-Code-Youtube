import React from 'react';
import HomeTabs from './HomeTabs';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    console.log(props.location)
    if(props.location.state ) {
        return <Redirect to={props.location.state.from.pathname}/>
    } else
    return(
        <div className="home">
            <HomeTabs />
        </div>
    );
}

export default Home;