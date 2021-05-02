let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

let message = 'Your Text'
const drawScreen = () => {
  context.font = fontWeight + " " + fontStyle + " " + fontSize + "px " + fontFace
  context.textBaseline = textBaseline
  context.textAlign = textAlign
}

let formElement = document.getElementById('textBox')
formElement.addEventListener('keyup', (e) => {
  let target = e.target
  message = target.value
  drawScreen()
}, false)

let fillOrStroke = 'fill'

formElement = document.getElementById('fillOrStroke')
formElement.addEventListener('change', (e) => {
  let target = e.target
  fillOrStroke = target.value
  drawScreen()
}, false)

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

const textSizeChanged = (e) => {
  fontSize = e.target.value
  drawScreen()
}

const textFontChanged = (e) => {
  fontFace = e.target.value
  drawScreen()
}

const fontWeightChanged = (e) => {
  fontWeight = e.target.value
  drawScreen()
}

const fontStyleChanged = (e) => {
  fontStyle = e.target.value
  drawScreen()
}

const canvasApp = () => {
  formElement = document.getElementById('textSize')
  formElement.addEventListener('change', textSizeChanged, false)
  formElement = document.getElementById('textFont')
  formElement.addEventListener('change', textFontChanged, false)
  formElement = document.getElementById('fontWeight')
  formElement.addEventListener('change', fontWeightChanged, false)
  formElement = document.getElementById('fontStyle')
  formElement.addEventListener('change', fontStyleChanged, false)

  var textAlpha = 1
  var shadowX = 1
  var shadowY = 1
  var shadowBlur = 1
  var shadowColor = '#707070'
}

let textBaseline = 'middle'
let textAlign = 'center'

formElement = document.getElementById('textBaseline')
formElement.addEventListener('change', (e) => {
  textBaseline = e.target.value
  drawScreen()
}, false)
formElement = document.getElementById('textAlign')
formElement.addEventListener('change', (e) => {
  textAlign = e.target.value
  drawScreen()
}, false)

// Alpha color event listener 
formElement = document.getElementById("textAlpha");formElement.addEventListener('change', (e) => {
  textAlpha = e.target.value
  drawScreen()
}, false)
