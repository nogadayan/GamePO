class Ball {
  constructor(x, y, w, h, xv, yv) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.xv = xv;
    this.yv = yv;
  }

  move() {
    this.x = this.x + this.xv;
    this.y = this.y + this.yv;

    if (this.x <= 25 || this.x >= 475) {
      this.xv = this.xv * -1;
    }
    if (this.y <= 25 || this.y >= 375) {
      this.yv = this.yv * -1;
    }

  }

  draw() {
    ellipse(this.x, this.y, this.width, this.height, this.xv, this.yv);
  }

  collide() {
    if (this.x < this.x + this.w && this.x + this.w > this.x) {
      fill("red");
    }
    else {
      fill("green");
    }
  }
}

class Rect {
  constructor(x, y, w, h, vx) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);

    if (this.x <= 0) {
      this.x = 2;
    }
    if (this.x >= 300) {
      this.x = 298;
    }

    if (keyIsDown(LEFT_ARROW) || (keyIsDown(65))) {
      this.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW) || (keyIsDown(68))) {
      this.x += 5;
    }

    this.vx = this.x + this.vx;


  }
}

class Target {
  constructor(x, y, w, h) {

  }



}

var ball, paddle;

function setup() {
  createCanvas(500, 400);

  ball = new Ball(225, 225, 50, 50, 2, 2);
  paddle = new Rect(150, 350, 200, 10);
}

function paddleBounce() {
  if (Ball.this.x < Rect.this.x + Rect.this.w && Rect.this.x + Rect.this.w > Ball.this.x) {
    fill("red");
  }
  else {
    fill("green");
  }
}

function draw() {
  background(125);

  fill(0);
  text("Use the arrow keys, left and right (or AD) to move the square around", 25, 25);

  fill(0, 0, 0);
  ball.draw();
  ball.move();
  ball.collide();
  paddle.draw();
}