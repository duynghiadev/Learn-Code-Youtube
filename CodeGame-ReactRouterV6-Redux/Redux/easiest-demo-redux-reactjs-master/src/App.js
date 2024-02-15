import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import { Routing } from './Routing';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Routing />
            </div>
        );
    }
}

export default App;
