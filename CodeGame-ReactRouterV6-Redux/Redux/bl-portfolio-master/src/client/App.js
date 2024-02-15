import React, { Component } from 'react';
import './app.css';
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
    };
}

  componentDidMount() {
    fetch('/api/getUserData')
      .then(res => res.json())
      .then(user => this.setState({ 
          username: user.username, 
            title: user.title,
            subtitle: user.subtitle
        }));
  }

  render() {
    const headerData = { 
        name: this.state.username,
        title: this.state.title,
        subtitle: this.state.subtitle
    };
    return (
      <div>
        <Header headerData={headerData}/>
      </div>
    );
  }
}
