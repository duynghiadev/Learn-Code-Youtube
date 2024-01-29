const TOTAL_TRACKS = 11
const TOTAL_DRINKS = 8
const TOTAL_DEATHS = 14
export default class Sound {
    constructor() {
        this.music = new Audio()
        this.music.loop = false
        this.music.onended = () => this.onMusicEnded()
        this.musicPlaying = false
        this.loadMusic()
        this.deaths = []
        this.drinks = []
        this.loadEffects()
    }
    loadEffects() {
        for (let i = 0; i < TOTAL_DRINKS; i++) {
            this.drinks[i] = new Audio(`assets/sounds/drink${i}.mp3`)
            this.drinks[i].loop = false
            this.drinks[i].load()
        }
        
        for (let i = 0; i < TOTAL_DEATHS; i++) {
            this.deaths[i] = new Audio(`assets/sounds/die${i}.mp3`)
            this.deaths[i].loop = false
            this.deaths[i].load()
        }
    }
    playEffect(effect) {

        if (effect === 'drink') {
            this.drinks[Math.floor(Math.random() * this.drinks.length)].play()
        } else {
            this.deaths[Math.floor(Math.random() * this.deaths.length)].play()
        }
    }
    loadMusic() {
        localStorage.musicTrack = localStorage.musicTrack || 0
        this.music.src = `assets/music/music${localStorage.musicTrack}.mp3`
        this.music.load()
        this.music.currentTime = parseFloat(localStorage.musicTime || 0)
    }
    playMusic() {
        if(this.musicPlaying) return
        this.music.play()
        this.musicPlaying = true;
    }
    pauseMusic() {
        this.music.pause()
        this.musicPlaying = false
        localStorage.musicTime = this.music.currentTime
    }
    onMusicEnded() {
        localStorage.musicTrack = (parseInt(localStorage.musicTrack || 0) + 1) % TOTAL_TRACKS
        localStorage.musicTracksPlayed = parseInt(localStorage.musicTracksPlayed || 0) + 1
        localStorage.musicTime = 0
        console.log(`Playing track: ${localStorage.musicTrack}`);
        this.loadMusic()
        this.playMusic()
    }
}