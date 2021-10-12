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

    if (ballX <= 25 || ballX >= 475) {
      ballXV = ballXV * -1;
    }
    if (ballY <= 25 || ballY >= 375) {
      ballYV = ballYV * -1;
    }

  }

  draw() {
    ellipse(ballX, ballY, ballW, ballH, ballXV, ballYV);
  }

  collide() {
    if (ballY + 25 >= rectY + rectH && rectY + rectH <= ballY +25 && ballX +25>= rectX && ballX <= rectX + rectW +25) {
      fill("red");
    }
    else {
      fill("green");
    }
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

class Target {
  constructor(x, y, w, h) {

  }



}

var ball, paddle, rectX, rectY, rectW, rectH, rectVX, ballX, ballY, ballW, ballH, ballXV, ballYV;

function setup() {
  createCanvas(500, 400);

  ball = new Ball(225, 225, 50, 50, 2, 2);
  paddle = new Rect(150, 350, 200, 10, 0);
}

function draw() {
  background(125);

  fill(0);
  text("Use the arrow keys, left and right (or AD) to move the square around", 25, 25);

  fill(0, 0, 0);
  paddle.draw();
  ball.collide();
  ball.draw();
  ball.move();
  
}