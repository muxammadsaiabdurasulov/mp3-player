const container = document.getElementById('container')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
const start = document.getElementById('start')
const end = document.getElementById('end')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')


// music names
const songs = [
    'Ending - Isak Danielson',
    'Heather - Conan Gray',
    'Osmonlarda - Xamdam Sobirov',
    'U okna - Hammali & Navai',
]



// songIndex
let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {
    title.textContent = song
    audio.src = `musics/${song}.mp3`
    cover.src = `images/${song}.jpg`

}

// play
function playSong() {
    container.classList.add('play')
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    audio.play()
}


// pause
function pauseSong() {
    container.classList.remove('play')
    playBtn.innerHTML = `<i class="fas fa-play"></i>`
    audio.pause()
}

// next
function nextMusic() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    audio.play()
}

// prev
function prevMusic() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    audio.play()
}


//Progress
function progess(e) {
    const duration = e.srcElement.duration
    const curTime = e.srcElement.currentTime
    const persentageWidth = (curTime / duration) * 100
    progress.style.width = `${persentageWidth}%`

    // end Time
    const endMinutes = Math.floor(duration / 60 )
    const endSecondes = Math.floor(duration % 60 )
}


// setProgress
function setProgress (e) {
    const width = this.clientWidth
    const widthX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (widthX / width) * duration 
}

// events
playBtn.addEventListener('click', function () {
    const isPlaying = container.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
}) 


nextBtn.addEventListener('click', nextMusic)
prevBtn.addEventListener('click', prevMusic)
audio.addEventListener('timeupdate', progess)
audio.addEventListener('ended', nextMusic)
progressContainer.addEventListener('click', setProgress)