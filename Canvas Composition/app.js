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

function drawScreen() {
  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (45 * Math.PI) / 180
  var x = 50
  var y = 100
  var width = 40
  var height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)

  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (75 * Math.PI) / 180
  var x = 100
  var y = 100
  var width = 40
  var height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
  context.setTransform(1, 0, 0, 1, 0, 0)

  var angleInRadians = (90 * Math.PI) / 180
  var x = 150
  var y = 100
  var width = 40
  var height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
  context.setTransform(1, 0, 0, 1, 0, 0)
  var angleInRadians = (120 * Math.PI) / 180
  var x = 200
  var y = 100
  var width = 40
  var height = 40
  context.translate(x + 0.5 * width, y + 0.5 * height)
  context.rotate(angleInRadians)
  context.fillStyle = 'red'
  context.fillRect(-0.5 * width, -0.5 * height, width, height)
}
