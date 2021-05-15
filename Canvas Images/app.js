let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

const drawScreen = () => {
  context.fillStyle = '#aaaaaa'
  context.fillRect(0, 0, 200, 200)
  context.fillStyle = '#000000'
  context.font = '20px sans-serif'
  context.textBaseline = 'top'
  context.fillText('Canvas!', 0, 0)
}

drawScreen()

// The Canvas Pixel Manipulation API
// The above API gives us the ability to "get", "put", and "change" individuals pixels, utilizing what is known as the CanvasPixelArray interface.
