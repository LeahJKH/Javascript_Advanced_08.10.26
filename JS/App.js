import { playSound } from './playSound.js'
import { soundEffects } from './Sounds.js'
import { createSoundCard } from './Dom.js'
import { randomSound } from './randomSound.js'

export const currentlyPlayingText = document.querySelector("#currplay")
const imgRandom = document.querySelector("#drumPic")

// spill av lyd baser på knapp vi trykker
window.addEventListener("keydown", (e) => {
    let pressedKey = e.key.toLowerCase()

    const selectedSound = soundEffects.find((sound) => sound.key === pressedKey)

    if (soundEffects) {
        playSound(selectedSound.src)
        currentlyPlayingText.textContent = selectedSound.soundName
    }
})
//

imgRandom.addEventListener("click", () => {
    randomSound()
})

// creates cards
createSoundCard()
//