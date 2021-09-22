class Ball{
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


var ball1, [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function setup() {
	createCanvas(500, 400);

    ball1 = new Ball(225,225,50,50);
}



function draw() {
	background(225);
	
	fill(0);
	text("Use the arrow keys (or WASD) to move the square around", 25, 25);
	
	fill(0, 255, 0);
	rect(xpos-75, ypos+125, 200, 10);
  ball1.draw();
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -2;
			break;
		case 39:
		case 68:
			xspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
	}
}