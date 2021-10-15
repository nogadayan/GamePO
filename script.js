var ball, paddle, brick, rectX, rectY, rectW, rectH, rectVX, ballX, ballY, ballR, ballXV, ballYV, gameState = 0, img1, img2, x1 = 0, x2, scrollSpeed = 0.3, seconds = 1000, sound1;

let bricks = []

function preload() {
  img1 = loadImage('img/gameOver.jpg');
  img2 = loadImage('img/backgroundGame.png');
  soundFormats('mp3', 'ogg')
  sound1 = loadSound('mp3/gameOver.mp3');
}

function setup() {
  createCanvas(1000, 800);
  x2 = 2844;

  if (gameState == 1)
   let A = random([0, 1, 2, 3]);

  ball = new Ball(500, 625, 15, 3, 3);
  paddle = new Rect(400, 750, 200, 20, 0);
  const bricksPerRow = 10;
  const brickWidth = width / bricksPerRow;
  for (let i = 0; i < bricksPerRow; i++) {
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
    music();
  }
}

var x = 0;

function menu() {
  background("#ababab");
  fill(0);
  text("MENU", 25, 45);

  text("2. start game", 25, 85);

  sound1.stop();
}

function reset() {
  ballX = 500;
  ballY = 625;
  rectX = 400;
  rectY = 750;
}


function game() {
  background(125);

  fill(0);
  text("Use the arrow keys, left and right (or AD) to move the square around", 25, 25);

  fill(0, 0, 0);
  scroller();

  paddle.draw();
  ball.collidePaddle();
  ball.collideBottom();
  ball.collideWall();
  ball.collideBrick();
  ball.draw();
  ball.move();
  //setTimeout(ball.move, seconds * 5);
}

function gameOver() {
  background('green');
  image(img1, 0, 0, 1000, 800);

  textStyle(BOLD);
  textSize(36);
  text("GAME OVER", 405, 700);
  textSize(24);
  text("Press Esc to go back to the main menu", 295, 765);
  fill('white');
  setTimeout(reset, seconds * 3);
}

function music() {
  if (!sound1.isPlaying()) {
    sound1.play();
    sound1.setVolume(0.8);
    sound1.rate(1);
  }
}

function countdown() {
  let timer = 3
  text(timer, width / 2, height / 2);
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    text("START", width / 2, height * 0.7);
  }
}

function keyPressed() {

  if (keyIsDown(ESCAPE)) {
    gameState = 0;
  }

  if (keyIsDown(50)) {
    gameState = 1;
  }
}

function scroller() {
  image(img2, x1, 0, 2844, 800);
  image(img2, x2, 0, 2844, 800);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -2844) {
    x1 = 2844;
  }
  if (x2 < -2844) {
    x2 = 2844;
  }
}

class Ball {
  constructor(x, y, r, xv, yv) {
    ballX = x;
    ballY = y;
    ballR = r;
    ballXV = xv;
    ballYV = yv;
  }

  move() {
    if (A == 0) {
      ballX = ballX + ballXV;
      ballY = ballY + ballYV;
    }
    if (A == 1) {
      ballX = ballX + ballXV;
      ballY = ballY + ballYV;
    }
    if (A == 2) {
      ballX = ballX + ballXV;
      ballY = ballY + ballYV;
    }
    if (A == 3) {
      ballX = ballX + ballXV;
      ballY = ballY + ballYV;
    }
  }

  draw() {
    fill(255);
    ellipse(ballX, ballY, ballR * 2, ballR * 2, ballXV, ballYV);
  }

  collidePaddle() {
    if (ballY + ballR >= rectY && ballX > rectX && ballX < rectX + rectW) {
      ballY = ballY - 1;
      ballYV = -ballYV;
      if (ballX > rectW / 2 && ballX < rectW) {
        ballXV = -ballXV;
      }
      else {
        ballXV = ballXV;
      }
    }
  }

  collideWall() {
    if (gameState == 1 && ballX <= 13 || ballX >= 987) {
      ballXV = ballXV * -1;
    }
    else {
      ballXV = ballXV;
    }
    if (gameState == 1 && ballY <= 13 || ballY >= 787) {
      ballYV = ballYV * -1;
    }
    else {
      ballYV = ballYV;
    }
  }

  collideBottom() {
    if (ballY >= 775) {
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
    fill(255);
    rect(rectX, rectY, rectW, rectH, rectVX);


    if (rectX <= 0) {
      rectX = 1;
    }
    if (rectX >= 800) {
      rectX = 799;
    }

    if (keyIsDown(LEFT_ARROW) || (keyIsDown(65))) {
      rectX -= 4;
    }

    if (keyIsDown(RIGHT_ARROW) || (keyIsDown(68))) {
      rectX += 4;
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