import { combineReducers } from 'redux'

const songs = [
  { title: 'Mo Scrubs', duration: '4:05' },
  { title: 'Fuck the bath', duration: '2:05' },
  { title: 'Shame on the writer', duration: '5:10' },
  { title: 'Let me love you', duration: '3:23' }
]

const songsReducer = () => {
  return songs
}

const selectedSongReducer = (selectedSong = songs[0], action) => {
  if (action.type === 'SONG_SELECTED') return action.payload
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})