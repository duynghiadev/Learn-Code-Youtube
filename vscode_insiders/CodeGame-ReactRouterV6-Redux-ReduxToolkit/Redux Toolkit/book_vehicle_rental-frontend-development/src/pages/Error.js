import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/page-not-found.jpg';

const Error = () => (
  <div>
    <img src={img} alt="page not found" style={{ width: '1000px', height: '600px', backgroundSize: 'cover' }} />
    <h3 style={{ textAlign: 'center' }}>
      :( We apologize, but it seems the page you were looking for cannot be
      found. We are working on this page!
      Thank you for your understanding.
    </h3>
    <Link to="/">back home</Link>
  </div>
);

export default Error;
