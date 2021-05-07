let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

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

    let canvas = document.getElementById('canvasOne')
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
    }
}