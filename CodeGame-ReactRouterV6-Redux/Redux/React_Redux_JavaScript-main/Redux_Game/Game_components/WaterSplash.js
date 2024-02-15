import React from 'react';
import { connect } from 'react-redux';

// Action creators
const addSplash = (x, y) => ({
  type: 'ADD_SPLASH',
  payload: { x, y },
});

// Reducer
const splashReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPLASH':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Redux store
const store = createStore(splashReducer);

// Component
class WaterSplash extends React.Component {
  handleClick = (event) => {
    const { clientX, clientY } = event;
    this.props.addSplash(clientX, clientY);
  };

  render() {
    const { splashes } = this.props;

    return (
      <div onClick={this.handleClick} style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {splashes.map((splash, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: splash.x,
              top: splash.y,
              width: '10px',
              height: '10px',
              backgroundColor: 'blue',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  splashes: state,
});

// Map Redux action creators to component props
const mapDispatchToProps = {
  addSplash,
};

// Connect component to Redux store
const ConnectedWaterSplash = connect(mapStateToProps, mapDispatchToProps)(WaterSplash);

export default ConnectedWaterSplash;
