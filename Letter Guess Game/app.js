let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

let guesses = 0
let message = 'Guess the letter from a (lower) to z (higher)'
let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
let today = new Date()
let letterToGuess = ''
let higherOrLower = ''
let lettersGuessed
let gameOver = false

const initGame = () => {
  let letterIndex = Math.floor(Math.random() * letters.length)
  letterToGuess = letters[letterIndex]
  guesses = 0
  lettersGuessed = []
  gameOver = false
  window.addEventListener('keydown', eventKeyPressed, true)
  drawScreen()
}

const eventKeyPressed = (e) => {
  if (!gameOver) {
    let letterPressed = String.fromCharCode(e.keyCode)
    letterPressed = letterPressed.toLowerCase()
    guesses++
    lettersGuessed.push(letterPressed)

    if (letterPressed == letterToGuess) {
      gameOver = true
    } else {
      letterIndex = letters.indexOf(letterToGuess)
      guessIndex = letters.indexOf(letterPressed)

      if (guessIndex < 0) {
        higherOrLower = 'That is not a letter'
      } else if (guessIndex > letterIndex) {
        higherOrLower = 'Lower'
      } else {
        higherOrLower = 'Higher'
      }
    }
    drawScreen()
  }
}

const drawScreen = () => {
  context.fillStyle = '#ffffaa'
  context.fillRect(0, 0, 500, 300)

  context.strokeStyle = '#000000'
  context.strokeRect(5, 5, 490, 290)
  context.textBaseline = 'top'

  context.fillStyle = '#000000'
  context.font = '10px Sans-Serif'
  context.fillText(today, 150, 10)

  context.fillStyle = '#FF0000'
  context.font = '14px Sans-Serif'
  context.fillText(message, 125, 30)
  context.fillStyle = '#109910'
  context.font = '16px Sans-Serif'
  context.fillText('Guesses: ' + guesses, 215, 50)

  context.fillStyle = '#000000'
  context.font = '16px Sans-Serif'
  context.fillText('Higher Or Lower: ' + higherOrLower, 150, 125)

  context.fillStyle = '#FF0000'
  context.font = '16px Sans-Serif'
  context.fillText('Letters Guessed: ' + lettersGuessed.toString(), 10, 260)

  if (gameOver) {
    context.fillStyle = '#FF0000'
    context.font = '40px Sans-Serif'
    context.fillText('You Got It!', 150, 180)
  }
}

initGame()

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

go = true
number = (Math.PI / 180) * 1

var gradient = context.createLinearGradient(0, 0, 300, 250)
gradient.addColorStop('0', 'green')
gradient.addColorStop('0.3', 'black')
gradient.addColorStop('0.5', 'blue')
gradient.addColorStop('0.7', 'cyan')
gradient.addColorStop('1.0', 'red')

drawScreen = () => {
  context.beginPath()
  context.strokeStyle = gradient
  context.lineWidth = 5

  context.arc(250, 150, 100, (Math.PI / 180) * 360, (number += 0.09), false)

  context.stroke()
  context.closePath()
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  window.setTimeout(gameLoop)
  drawScreen()
}
gameLoop()
