import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showSplash, hideSplash } from './actions';

const SplashScreen = () => {
  const show = useSelector(state => state.splash.show);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideSplash());
  };

  return (
    <div className={`splash ${show ? 'show' : 'hide'}`}>
      <button onClick={handleClick}>Close</button>
      <img src="splash.jpg" alt="Splash" />
    </div>
  );
};

export default SplashScreen;
