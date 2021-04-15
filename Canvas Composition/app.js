let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

/*
const drawScreen = () => {
  //draw a big box on the screen
  context.fillStyle = 'black'
  context.fillRect(10, 10, 200, 200)
  //now draw a red square
  context.fillStyle = 'red'
  context.fillRect(1, 1, 50, 50) // now set it to source-over
  context.globalCompositeOperation = 'source-over' // draw a red square next to the other one
  context.fillRect(60, 1, 50, 50) // now set to destination-atop (DOES NOT WORK PROPERLY IN BROWSERS ANYMORE)
  context.globalCompositeOperation = 'destination-atop'
  context.fillRect(1, 60, 50, 50)
  // now set globalAlpha
  context.globalAlpha = 0.5 // now set to source-atop
  context.globalCompositeOperation = 'source-atop'
  context.fillRect(60, 60, 50, 50)
}
*/

// Learning about transformations
/*
const drawScreen = () => {
  //now draw a red square
  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (45 * Math.PI) / 180
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(100, 100, 50, 50)
}
*/

// The function above will transform the square into a triangle and it will be out of place
// Correct transformation has to be applied using the function below

/*
const drawScreen = () => {
  context.fillStyle = 'black'
  context.fillRect(20, 20, 25, 25)
  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (45 * Math.PI) / 180
  var x = 100
  var y = 100
  var width = 50
  var height = 50

  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
}
*/

/*
function drawScreen() {
  context.setTransform(1, 0, 0, 1, 0, 0)
  let angleInRadians = (45 * Math.PI) / 180
  let x = 50
  let y = 100
  let width = 40
  let height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)

  context.setTransform(1, 0, 0, 1, 0, 0)
  let angleInRadians = (75 * Math.PI) / 180
  let x = 100
  let y = 100
  let width = 40
  let height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
  context.setTransform(1, 0, 0, 1, 0, 0)

  let angleInRadians = (90 * Math.PI) / 180
  let x = 150
  let y = 100
  let width = 40
  let height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
  context.setTransform(1, 0, 0, 1, 0, 0)
  let angleInRadians = (120 * Math.PI) / 180
  let x = 200
  let y = 100
  let width = 40
  let height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
}
*/

// Scaling and rotation of a nonsquare object
/*
const drawScreen = () => {
  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (90 * Math.PI) / 180
  var x = 100
  var y = 100
  var width = 100
  var height = 50
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.scale(2, 2)
  
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
}
*/

// Learning linear and radial gradients
/*
const drawScreen = () => {
  // Creating a horizontal gradient
  let gr = context.createLinearGradient(0, 0, 100, 0)

  // Add the color stops
  gr.addColorStop(0, 'rgb(255,0,0)')
  gr.addColorStop(0.5, 'rgb(0,255,0)')
  gr.addColorStop(1, 'rgb(255,0,0)')

  // Use the gradient for the fillstyle
  context.fillStyle = gr
  context.fillRect(0, 0, 100, 100)

  // The gradients can be applied to anything, from complex shapes to outlining the borders of the shapes:
  context.fillStyle = gr
  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(50, 0)
  context.lineTo(100, 50)
  context.lineTo(50, 100)
  context.lineTo(0, 100)
  context.lineTo(0, 0)
  context.stroke()
  context.fill()
  context.closePath()
}
*/

// Radial gradient (circular gradient, as opposed to linear shown above)
const drawScreen = () => {
  let gr = context.createRadialGradient(50, 50, 25, 50, 50, 100)

  gr.addColorStop(0, 'rgb(255,0,0)')
  gr.addColorStop(0.5, 'rgb(0,255,0)')
  gr.addColorStop(1, 'rgb(255,0,0)')

  context.fillStyle = gr
  context.fillRect(0, 0, 200, 200)
}