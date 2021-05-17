let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

var points = new Array()

let speed = 5
var p1 = { x: 20, y: 250 }
var p2 = { x: 480, y: 250 }

var dx = p2.x - p1.x
var dy = p2.y - p1.y
var distance = Math.sqrt(dx * dx + dy * dy)
var moves = distance / speed

var xunits = (p2.x - p1.x) / moves
var yunits = (p2.y - p1.y) / moves

var ball = { x: p1.x, y: p1.y }

const updateBall = () => {
  radians = (angle * Math.PI) / 180
  xunits = Math.cos(radians) * speed
  yunits = Math.sin(radians) * speed
}

const drawScreen = () => {
  context.strokeStyle = '#000000'
  context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2)
  ball.x += xunits
  ball.y += yunits
  context.fillStyle = '#000000'
  context.beginPath()
  context.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true)
  context.closePath()
  context.fill()

  if (ball.x > theCanvas.width || ball.x < 0) {
    angle = 180 - angle
    updateBall()
  } else if (ball.y > theCanvas.height || ball.y < 0) {
    angle = 360 - angle
    updateBall()
  }
}

const gameLoop = () => {
  window.setTimeout(gameLoop, 20)
  drawScreen()
}
