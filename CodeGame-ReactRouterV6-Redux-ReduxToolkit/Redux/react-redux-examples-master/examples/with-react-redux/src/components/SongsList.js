import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions'

class SongsList extends Component {
  constructor(props) {
    super(props)
    this.renderList = this.renderList.bind(this)
    this.isSongSelected = this.isSongSelected.bind(this)
  }

  renderList() {
    return this.props.songs.map((song, index) => (
      <article className="item" key={index}>
        <div className="right floated content">
          <button 
            className={`ui button ${this.isSongSelected(song) ? "success" : "primary"}`}
            onClick={() => this.props.selectSong(song)}
          >
            { this.isSongSelected(song) ? "Selected" : "Select" }
          </button>
        </div>
        <div className="content">
          { song.title }
        </div>
      </article>
    )) 
  }

  isSongSelected({ title }) {
    try {
      return this.props.selectedSong.title === title ? true : false
    } catch (err) {
      return false
    }
  }

  render() {
    return (
      <section className="ui divided list">
        { this.renderList() }
      </section>
    )
  }
}

const mapStateToProps = ({ songs, selectedSong }) => {
  return {
    songs,
    selectedSong
  }
}

export default connect(
  mapStateToProps, 
  { 
    // Action Creators
    selectSong
  }
)(SongsList)