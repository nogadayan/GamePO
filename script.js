var ball, paddle, brick, rectX, rectY, rectW, rectH, rectVX, ballX, ballY, ballW, ballH, ballXV, ballYV, gameState = 0, img1;

let bricks = []

function preload() {
  img1 = loadImage('img/itshopeless_7587.jpg');
}

function setup() {
  createCanvas(500, 400);

  ball = new Ball(225, 225, 50, 50, 2, 2);
  paddle = new Rect(150, 350, 200, 10, 0);
  const bricksPerRow = 10;
  const brickWidth = width / bricksPerRow;
  for (let i = 0; i < bricksPerRow;  i++ ) {
    brick = new Brick(createVector(0, 0), brickWidth, 25, color("blue"))
  }
}

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }
}

var x = 0;

function menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
  reset();
}

function reset() {
  ballX = 225;
  ballY = 225;
  rectX = 150;
  rectY = 350;
  fill(0);
}


function game() {
  background(125);

  fill(0);
  text("Use the arrow keys, left and right (or AD) to move the square around", 25, 25);

  fill(0, 0, 0);
  paddle.draw();
  ball.collidePaddle();
  ball.collideBottom();
  ball.collideBrick();
  ball.draw();
  ball.move();
}

function gameOver() {
  background('green');
  image(img1, 0, 0, 500, 400);
  text("GAME OVER", 215, 345);
  fill('white');
}


function keyPressed() {

  if (keyIsDown(ESCAPE)) {
    gameState = 0;
  }

  if (keyIsDown(50)) {
    gameState = 1;
  }

  if (keyIsDown(51)) {
    gameState = 2;
  }
}

class Ball {
  constructor(x, y, w, h, xv, yv) {
    ballX = x;
    ballY = y;
    ballW = w;
    ballH = h;
    ballXV = xv;
    ballYV = yv;
  }

  move() {
    ballX = ballX + ballXV;
    ballY = ballY + ballYV;

    if (gameState == 1 && ballX <= 25 || ballX >= 475) {
      ballXV = ballXV * -1;
    }
    else {
      ballXV = ballXV;
    }
    if (gameState == 1 && ballY <= 25 || ballY >= 375) {
      ballYV = ballYV * -1;
    }
    else {
      ballYV = ballYV;
    }

  }

  draw() {
    ellipse(ballX, ballY, ballW, ballH, ballXV, ballYV);
  }

  collidePaddle() {
    if (ballY + 25 >= rectY + rectH && rectY + rectH <= ballY + 25 && ballX + 25 >= rectX && ballX <= rectX + rectW + 25) {
      ballY = (rectY + rectH - 25);
      ballYV = ballYV * -1;
    }
  }

  collideBottom() {
    if (ballY >= 375) {
      fill("red");
      gameState = 2;
    }
  }

  collideBrick() {

  }
}

class Rect {
  constructor(x, y, w, h, vx) {
    rectX = x;
    rectY = y;
    rectW = w;
    rectH = h;
    rectVX = vx;
  }

  draw() {
    rect(rectX, rectY, rectW, rectH, rectVX);


    if (rectX <= 0) {
      rectX = 1;
    }
    if (rectX >= 300) {
      rectX = 299;
    }

    if (keyIsDown(LEFT_ARROW) || (keyIsDown(65))) {
      rectX -= 3;
    }

    if (keyIsDown(RIGHT_ARROW) || (keyIsDown(68))) {
      rectX += 3;
    }

  }
}

class Brick {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.points = 1;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }


}