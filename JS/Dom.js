import { playSound } from './playSound.js'
import { soundEffects } from './Sounds.js'
import { currentlyPlayingText } from './App.js'
const container = document.querySelector("#buttonCont")

export function createSoundCard() {
    soundEffects.forEach((sound) => {
        const div = document.createElement("div")
        const btn = document.createElement("button")
        const p = document.createElement("p")

        const btnTxt = document.createTextNode(sound.soundName)
        const pTxt = document.createTextNode(`Keyboard key: ${sound.key}`)

        btn.append(btnTxt)
        p.append(pTxt)

        div.dataset.name = sound.soundName

        btn.addEventListener("click", () => {
            playSound(sound.src)
            currentlyPlayingText.textContent = sound.soundName
        })

        div.append(p)
        div.append(btn)

        container.append(div)
    })
} 