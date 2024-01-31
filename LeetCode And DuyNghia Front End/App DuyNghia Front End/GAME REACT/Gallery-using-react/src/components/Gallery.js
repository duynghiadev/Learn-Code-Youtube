import React from 'react';
import Header from './Header';
import ImageList from './ImageList';
import {Link} from 'react-router-dom';
import '../styles/base.css';
import '../styles/image.css';
import '../styles/button.css';
export default class Gallery extends React.Component{
  render(){
    return (
      <div>
        <div className="page-content">
          <Header/>
          <ImageList/>
        </div>
        <div className="page-content">
          <Link to="/">GO BACK</Link>
        </div>
      </div>
    );
  }
}
