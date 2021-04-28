let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

let message = 'Your Text'
const drawScreen = () => {
  context.font = fontWeight + ' ' + fontStyle + ' ' + fontSize + 'px ' + fontFace
}

const textBoxChanged = (e) => {
  let target = e.target
  message = target.value
  drawScreen()
}

let formElement = document.getElementById('textBox')
formElement.addEventListener('keyup', textBoxChanged, false)

let fillOrStroke = 'fill'

const fillOrStrokeChanged = (e) => {
  let target = e.target
  fillOrStroke = target.value
  drawScreen()
}

formElement = document.getElementById('fillOrStroke')
formElement.addEventListener('change', fillOrStrokeChanged, false)

let metrics = context.measureText(message)
let textWidth = metrics.width
let xPosition = canvas.width / 2 - textWidth / 2
let yPosition = canvas.height / 2
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

let fontSize = '50'
let fontFace = 'serif'
let fontWeight = 'normal'
let fontStyle = 'normal'

const canvasApp = () => {
  formElement = document.getElementById('textSize')
  formElement.addEventListener('change', textSizeChanged, false)
  formElement = document.getElementById('textFont')
  formElement.addEventListener('change', textFontChanged, false)
  formElement = document.getElementById('fontWeight')
  formElement.addEventListener('change', fontWeightChanged, false)
  formElement = document.getElementById('fontStyle')
  formElement.addEventListener('change', fontStyleChanged, false)
}

const textSizeChanged = (e) => {
  let target = e.target
  fontSize = target.value
  drawScreen()
}

const textFontChanged = (e) => {
  var target = e.target
  fontFace = target.value
  drawScreen()
}
const fontWeightChanged = (e) => {
  var target = e.target
  fontWeight = target.value
  drawScreen()
}
const fontStyleChanged = (e) => {
  var target = e.target
  fontStyle = target.value
  drawScreen()
}
