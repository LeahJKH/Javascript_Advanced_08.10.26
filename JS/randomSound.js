import { soundEffects } from './Sounds.js'
import { playSound } from './playSound.js'
import { currentlyPlayingText } from './App.js'

export function randomSound() {
    let randomIndex = Math.floor(Math.random() * soundEffects.length)
    playSound(soundEffects[randomIndex].src)
    currentlyPlayingText.textContent = soundEffects[randomIndex].soundName
}