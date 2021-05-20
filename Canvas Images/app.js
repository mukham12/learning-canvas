let canvas = document.getElementById('my-canvas')
let context = canvas.getContext('2d')

let points = new Array()

let speed = 5
let p1 = { x: 20, y: 250 }
let p2 = { x: 480, y: 250 }

let dx = p2.x - p1.x
let dy = p2.y - p1.y
let distance = Math.sqrt(dx * dx + dy * dy)
let moves = distance / speed

let xunits = (p2.x - p1.x) / moves
let yunits = (p2.y - p1.y) / moves

let ball = { x: p1.x, y: p1.y }

const updateBall = () => {
  radians = (angle * Math.PI) / 180
  xunits = Math.cos(radians) * speed
  yunits = Math.sin(radians) * speed
}

let numBalls = 100
let maxSize = 8
let minSize = 5
let maxSpeed = maxSize + 5
let balls = new Array()

let tempBall
let tempX
let tempY

let tempSpeed
let tempAngle
let tempRadius
let tempRadians
let tempXunits
let tempYunits

for (let i = 0; i < numBalls; i++) {
  tempRadius = Math.floor(Math.random() * maxSize) + minSize
  tempX = tempRadius * 2 + (Math.floor(Math.random() * theCanvas.width) - tempRadius * 2)
  tempY = tempRadius * 2 + (Math.floor(Math.random() * theCanvas.height) - tempRadius * 2)
  tempSpeed = maxSpeed - tempRadius
  tempAngle = Math.floor(Math.random() * 360)
  tempRadians = (tempAngle * Math.PI) / 180
  tempXunits = Math.cos(tempRadians) * tempSpeed
  tempYunits = Math.sin(tempRadians) * tempSpeed
  tempBall = {
    x: tempX,
    y: tempY,
    radius: tempRadius,
    speed: tempSpeed,
    ngle: tempAngle,
    xunits: tempXunits,
    yunits: tempYunits,
  }
  balls.push(tempBall)
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
