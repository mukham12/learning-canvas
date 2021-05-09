const canvasApp = () => {
  let message = 'your text'
  let fontSize = '50'
  let fontFace = 'serif'
  let textFillColor = '#ff0000'
  let textAlpha = 1
  let shadowX = 1
  let shadowY = 1
  let shadowBlur = 1
  let shadowColor = '#707070'
  let textBaseline = 'middle'
  let textAlign = 'center'
  let fillOrStroke = 'fill'
  let fontWeight = 'normal'
  let fontStyle = 'normal'
  let fillType = 'colorFill'
  let textFillColor2 = '#000000'
  let pattern = new Image()

  let canvas = document.getElementById('my-canvas')
  let context = canvas.getContext('2d')

  let formElement = document.getElementById('textBox')
  formElement.addEventListener('keyup', textBoxChanged, false)

  formElement = document.getElementById('fillOrStroke')
  formElement.addEventListener('change', fillOrStrokeChanged, false)

  formElement = document.getElementById('textSize')
  formElement.addEventListener('change', textSizeChanged, false)

  formElement = document.getElementById('textFillColor')
  formElement.addEventListener('change', textFillColorChanged, false)

  formElement = document.getElementById('textFont')
  formElement.addEventListener('change', textFontChanged, false)

  formElement = document.getElementById('textBaseline')
  formElement.addEventListener('change', textBaselineChanged, false)

  formElement = document.getElementById('textAlign')
  formElement.addEventListener('change', textAlignChanged, false)

  formElement = document.getElementById('fontWeight')
  formElement.addEventListener('change', fontWeightChanged, false)

  formElement = document.getElementById('fontStyle')
  formElement.addEventListener('change', fontStyleChanged, false)

  formElement = document.getElementById('shadowX')
  formElement.addEventListener('change', shadowXChanged, false)

  formElement = document.getElementById('shadowY')
  formElement.addEventListener('change', shadowYChanged, false)

  formElement = document.getElementById('shadowBlur')
  formElement.addEventListener('change', shadowBlurChanged, false)

  formElement = document.getElementById('shadowColor')
  formElement.addEventListener('change', shadowColorChanged, false)

  formElement = document.getElementById('textAlpha')
  formElement.addEventListener('change', textAlphaChanged, false)

  formElement = document.getElementById('textFillColor2')
  formElement.addEventListener('change', textFillColor2Changed, false)

  formElement = document.getElementById('fillType')
  formElement.addEventListener('change', fillTypeChanged, false)

  formElement = document.getElementById('canvasWidth')
  formElement.addEventListener('change', canvasWidthChanged, false)

  formElement = document.getElementById('canvasHeight')
  formElement.addEventListener('change', canvasHeightChanged, false)

  formElement = document.getElementById('canvasStyleWidth')
  formElement.addEventListener('change', canvasStyleSizeChanged, false)

  formElement = document.getElementById('canvasStyleHeight')
  formElement.addEventListener('change', canvasStyleSizeChanged, false)

  formElement = document.getElementById('createImageData')
  formElement.addEventListener('click', createImageDataPressed, false)

  pattern.src = 'texture.jpg'
  drawScreen()

  const drawScreen = () => {
    context.globalAlpha = 1
    context.shadowColor = '#707070'
    context.shadowOffsetX = 0
    context.shadowOffsetY = 0
    context.shadowBlur = 0
    context.fillStyle = '#ffffaa'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.strokeStyle = '#000000'
    context.strokeRect(5, 5, canvas.width - 10, canvas.height - 10)

    context.textBaseline = textBaseline
    context.textAlign = textAlign
    context.font =
      fontWeight + ' ' + fontStyle + ' ' + fontSize + 'px ' + fontFace
    context.shadowColor = shadowColor
    context.shadowOffsetX = shadowX
    context.shadowOffsetY = shadowY
    context.shadowBlur = shadowBlur
    context.globalAlpha = textAlpha

    let xPosition = theCanvas.width / 2
    let yPosition = theCanvas.height / 2

    let metrics = context.measureText(message)
    let textWidth = metrics.width

    let tempColor
    if (fillType == 'colorFill') {
      tempColor = textFillColor
    } else if (fillType == 'linearGradient') {
      let gradient = context.createLinearGradient(
        xPosition - textWidth / 2,
        yPosition,
        textWidth,
        yPosition
      )
      gradient.addColorStop(0, textFillColor)
      gradient.addColorStop(0.6, textFillColor2)
      tempColor = gradient
    } else if (fillType == 'radialGradient') {
      let gradient = context.createRadialGradient(
        xPosition,
        yPosition,
        fontSize,
        xPosition + textWidth,
        yPosition,
        1
      )
      gradient.addColorStop(0, textFillColor)
      gradient.addColorStop(0.6, textFillColor2)
      tempColor = gradient
    } else if (fillType == 'pattern') {
      let tempColor = context.createPattern(pattern, 'repeat')
    } else {
      tempColor = textFillColor
    }

    switch (fillOrStroke) {
      case 'fill':
        context.fillStyle = tempColor
        context.fillText(message, xPosition, yPosition)
        break
      case 'stroke':
        context.strokeStyle = tempColor
        context.strokeText(message, xPosition, yPosition)
        break
      case 'both':
        context.fillStyle = tempColor
        context.fillText(message, xPosition, yPosition)
        context.strokeStyle = '#000000'
        context.strokeText(message, xPosition, yPosition)
        break
    }
  }

  const textBoxChanged = (e) => {
    message = e.target.value
    drawScreen()
  }

  const textBaselineChanged = (e) => {
    textBaseline = e.target.value
    drawScreen()
  }

  const textAlignChanged = (e) => {
    textAlign = e.target.value
    drawScreen()
  }

  const fillOrStrokeChanged = (e) => {
    fillOrStroke = e.target.value
    drawScreen()
  }

  const textSizeChanged = (e) => {
    fontSize = e.target.value
    drawScreen()
  }

  const textFillColorChanged = (e) => {
    textFillColor = '#' + e.target.value
    drawScreen()
  }
}
