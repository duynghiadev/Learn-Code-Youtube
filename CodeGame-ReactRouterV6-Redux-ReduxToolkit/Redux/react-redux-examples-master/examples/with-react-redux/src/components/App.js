import React, { Component } from 'react'
import SongsList from './SongsList'
import SongDetail from './SongDetail'

class App extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongsList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div> 
      </div>
    )
  }
}

export default App