const playButton = document.querySelector('.player__button')
const video = document.querySelector('.viewer')
const skipForward = document.querySelector('.player__button[data-skip="25"]')
const skipBackward = document.querySelector('.player__button[data-skip="-10"]')
const volumeSlider = document.querySelector('.player__slider[name="volume"]')
const speedSlider = document.querySelector('.player__slider[name="playbackRate"]')
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

function skip25s(e){
    if(playing == true){
        video.currentTime += 25
    } 
}
function skip10s(e){
    if(playing == true) {
        if(video.currentTime > 10){
            video.currentTime -= 10
        }
    }
}

function toggleVolume(e){
    if(!clicked){return}
    if(e.screenX >= 170 || e.screenX <= 70){
        return
    } else {
        video.volume =((e.screenX - 70) / 100)
        console.log(video.volume)
    }
    
}
 
 var arr = [1,2,3,4,5]
function toggleRate(e) {
    if(!clicked){return}
    
}
playButton.addEventListener('click', toggleButton)
video.addEventListener('click', toggleButton)
skipForward.addEventListener('click',skip25s)
skipBackward.addEventListener('click',skip10s)
volumeSlider.addEventListener('mousedown',() => { clicked = true})
volumeSlider.addEventListener('mousemove',toggleVolume)
volumeSlider.addEventListener('mouseup',() => {clicked = false})
speedSlider.addEventListener('mousedown',() => { clicked = true})
speedSlider.addEventListener('mousemove',toggleRate)
speedSlider.addEventListener('mouseup',() => {clicked = false})

console.table(arr)