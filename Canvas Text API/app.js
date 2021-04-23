let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

let message = 'your text'
const drawScreen = () => {
  context.font = '50px serif'
  context.fillText(message, 100, 80)
  context.fillStyle = '#FF0000'
}

let formElement = document.getElementById('textBox')
formElement.addEventListener('keyup', textBoxChanged, false)

const textBoxChanged = (e) => {
  let target = e.target
  message = target.value
  drawScreen()
}

let metrics = context.measureText(message)

let textWidth = metrics.width
let xPosition = theCanvas.width / 2 - textWidth / 2

let fillOrStroke = 'fill'

formElement = document.getElementById('fillOrStroke')
formElement.addEventListener('change', fillOrStrokeChanged, false)
const fillOrStrokeChanged = (e) => {
  let target = e.target
  fillOrStroke = target.value
  drawScreen()
}

let metrics = context.measureText(message)
let textWidth = metrics.width
let xPosition = theCanvas.width / 2 - textWidth / 2
let yPosition = theCanvas.height / 2
switch (fillOrStroke) {
  case 'fill':
    context.fillStyle = '#FF0000'
    context.fillText(message, xPosition, yPosition)
    break
  case 'stroke':
    context.strokeStyle = '#FF0000'
    context.strokeText(message, xPosition, yPosition)
    break
  case 'both':
    context.fillStyle = '#FF0000'
    context.fillText(message, xPosition, yPosition)
    context.strokeStyle = '#000000'
    context.strokeText(message, xPosition, yPosition)
    break
}
