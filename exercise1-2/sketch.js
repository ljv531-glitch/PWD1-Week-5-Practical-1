let starXs = [];
let starYs = [];

function setup() {
  createCanvas(500, 500); 
}

function draw() {
  background(20, 30, 60); 

  updateStars();
  drawStars();
}


function updateStars() {
  for (let i = 0; i < starYs.length; i++) {
    starYs[i] += 2; 
  }
}


function drawStars() {
  for (let i = 0; i < starXs.length; i++) {
    star(starXs[i], starYs[i]);
  }
}

function mousePressed() {
  
  starXs.push(mouseX);
  starYs.push(mouseY);
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
  fill(255, 234, 0);
  noStroke();
  triangle(x, y - 50, x - 20, y, x + 20, y);
  triangle(x - 50, y - 20, x, y - 20, x, y + 10);
  triangle(x + 50, y - 20, x, y - 20, x, y + 10);
  triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
  triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}
