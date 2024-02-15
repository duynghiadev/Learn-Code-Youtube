import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong: { title, duration } }) => {
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {title}
        <br />
        Duration: {duration}
      </p>
    </div>
  )
}

const mapStateToProps = ({ selectedSong }) => {
  return {
    selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)