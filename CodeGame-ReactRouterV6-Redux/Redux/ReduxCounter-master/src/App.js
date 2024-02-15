import React from 'react';
import './App.css'
import Counter from "./components/Counter";
import {Provider} from 'react-redux'
import {reducer} from './redux/Reducer'

const MyComponent = () => {
    return (
        <Provider store={reducer}>
            <Counter/>
        </Provider>
    );
};

export default MyComponent;
