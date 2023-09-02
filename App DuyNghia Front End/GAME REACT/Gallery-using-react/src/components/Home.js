import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return (
      <div className="page-content">
        <Link to="/gallery"><h1>GALLERY</h1></Link>
        <h2>5 beautiful places in the world</h2>
        <ul>
          <li>Taj Mahal, India</li>
          <li>Sydney Opera house, Australia</li>
          <li>London Eye, London</li>
          <li>Prague Castle, Prague</li>
          <li>Neuschwanstein Castle, Germany</li>
        </ul>
        <Link to="/gallery"><p>ENTER</p></Link>
      </div>
    );
  }
}
