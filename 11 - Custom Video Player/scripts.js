const playButton = document.querySelector('.player__button')
const video = document.querySelector('.viewer')
const skipForward = document.querySelector('.player__button[data-skip="25"]')
const skipBackward = document.querySelector('.player__button[data-skip="-10"]')
const volumeSlider = document.querySelector('.player__slider[name="volume"]')
const speedSlider = document.querySelector('.player__slider[name="playbackRate"]')
const progressBar = document.querySelector('.progress__filled')
const progress = document.querySelector('.progress')
const ranges = document.querySelectorAll('.player__slider')
let playing = false
let clicked = false
let videoCurrTime;

function toggleButton(){
    if (playing == false) {
        video.play()
        playing = true
    } else {
        video.pause()
        playing = false
        videoCurrTime = video.currentTime
    }
}

function skip25s(){
    if(playing == true){
        video.currentTime += 25
    } 
}
function skip10s(){
    if(playing == true) {
        if(video.currentTime > 10){
            video.currentTime -= 10
        }
    }
}

function handleRangeChange() {
    video[this.name] = this.value
}

function toggleVolume(e){
    if(!clicked){return}
    
}
 
function togglePlaybackRate(e) {
    if(!clicked){return}
    if (e.screenX >= 320 || e.screenX <= 200){
        return
    } else {
        video.playbackRate = (((e.screenX - 200) / 10) /6)
    }
}

function videoSeek(e) {
    console.log(e)
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚'
    playButton.textContent = icon
    
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
    console.log(e)
}
playButton.addEventListener('click', toggleButton)
video.addEventListener('click', toggleButton)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
skipForward.addEventListener('click',skip25s)
skipBackward.addEventListener('click',skip10s)
volumeSlider.addEventListener('mousedown',() => { clicked = true})
volumeSlider.addEventListener('mousemove',toggleVolume)
volumeSlider.addEventListener('mouseup',() => {clicked = false})
speedSlider.addEventListener('mousedown',() => { clicked = true})
speedSlider.addEventListener('mousemove',togglePlaybackRate)
speedSlider.addEventListener('mouseup',() => {clicked = false})
ranges.forEach(range => range.addEventListener('change',handleRangeChange))
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => clicked && scrub(e))
progress.addEventListener('mouseup',() => {clicked = false})
progress.addEventListener('mousedown',() => { clicked = true})