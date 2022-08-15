
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let stopTime
let minutes = Number(displayMinutes.textContent)
let seconds = Number(displaySeconds.textContent)

/*Start Sounds variable*/
let soundFlorest = new Audio('./Sounds/Floresta.wav')
const soundRain = new Audio('./Sounds/Chuva.wav')
const soundCoffee = new Audio('./Sounds/Cafeteria.wav')
const soundFire = new Audio('./Sounds/Lareira.wav')

const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')

soundFlorest.loop = true;
soundRain.loop = true;
soundCoffee.loop = true;
soundFire.loop = true;

/*End Sounds variable*/

function countdown() {
  stopTime = setTimeout(function() {
    seconds = Number(displaySeconds.textContent)
    minutes = Number(displayMinutes.textContent)

    updateDisplay(minutes, 0)

    if(minutes <= 0) {
      buttonStop()
      return
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }
    
    updateDisplay(minutes, String(seconds -1))

    countdown()
  }, 1000) 
}

function resetTime() {
  if(seconds) {
    updateDisplay(minutes, seconds -1)
  }else {
    updateDisplay(minutes, seconds)
  }
  
  clearTimeout(stopTime)
}

function addMinutes() {
  if(seconds <= 0) {
    ++seconds
  }

  if(minutes >= 59) {
    alert('Limite maximo de tempo')
    return
  }

  updateDisplay(String(minutes +5), seconds -1)
}

function removeMinutes() {
  if(minutes < 5) {
    updateDisplay(0, 0)
    return
  }

  if(seconds) {
    updateDisplay(String(minutes -5), seconds -1)
  }else {
    updateDisplay(String(minutes -5), seconds)
  }
  
}

function updateDisplay(minutes, seconds) {
  displayMinutes.textContent = String(minutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
}

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  resetTime()
  allSoundsPause()
})

buttonAddTime.addEventListener('click', function() {
  addMinutes()
  
})

buttonRemoveTime.addEventListener('click', function() {
  removeMinutes()
})


//Clicks sounds button

function allSoundsPause() {
  soundFlorest.pause()
  soundRain.pause()
  soundCoffee.pause()
  soundFire.pause()
}

buttonFlorest.addEventListener('click', function() {
  soundFlorest.play()
  soundRain.pause()
  soundCoffee.pause()
  soundFire.pause()
})

buttonRain.addEventListener('click', function() {
  soundFlorest.pause()
  soundRain.play()
  soundCoffee.pause()
  soundFire.pause()
})

buttonCoffee.addEventListener('click', function() {
  soundFlorest.pause()
  soundRain.pause()
  soundCoffee.play()
  soundFire.pause()
})

buttonFire.addEventListener('click', function() {
  soundFlorest.pause()
  soundRain.pause()
  soundCoffee.pause()
  soundFire.play()
})
//End clicks sounds button


//Volume

let volumeFlorest = document.querySelector('#volumeFlorest')
let volumeRain = document.querySelector('#volumeRain')
let volumeCoffee = document.querySelector('#volumeCoffee')
let volumeFire = document.querySelector('#volumeFire')

volumeFlorest.addEventListener('change', function(volume){
  soundFlorest.volume = volume.currentTarget.value / 100
})

volumeRain.addEventListener('change', function(volume){
  soundRain.volume = volume.currentTarget.value / 100
})

volumeCoffee.addEventListener('change', function(volume){
  soundRain.volume = volume.currentTarget.value / 100
})

volumeFire.addEventListener('change', function(volume){
  soundRain.volume = volume.currentTarget.value / 100
})

//End volume

//DarkMode

const moon = document.querySelector('.moon')
const light = document.querySelector('.light')

light.addEventListener('click', function() {
  light.classList.add('hide')
  moon.classList.remove('hide')
})

moon.addEventListener('click', function() {
  light.classList.remove('hide')
  moon.classList.add('hide')
})

function changeTheme() {
  
}



