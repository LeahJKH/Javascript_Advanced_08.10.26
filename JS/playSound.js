let audio = null;

export function playSound(path) {
    if (audio) {
        audio.pause()
        audio.currentTime = 0
    }
    
    audio = new Audio(path)
    audio.play()    
}