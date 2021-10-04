class Ball {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  draw() {
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}

var ball1, paddle, [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function setup() {
  createCanvas(500, 400);

  ball1 = new Ball(225, 225, 50, 50);
  paddle = new Rect(150, 350, 200, 10);
}



function draw() {
  background(125);

  fill(0);
  text("Use the arrow keys, left and right (or AD) to move the square around", 25, 25);

  fill(0, 0, 0);
  ball1.draw();
  paddle.draw();

  if (xpos >= 400 || xpos <= 0) {
    xpos = 400;
  }
  else
    xpos += -xspeed;
}

function keyPressed() {
  switch (keyCode) {
    case 37:
    case 65:
      
      break;
    case 39:
    case 68:
      
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case 37:
    case 65:
      
      break;
    case 39:
    case 68:
      
      break;
  }
}