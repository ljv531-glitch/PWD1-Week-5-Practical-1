let xs = [];
let ys = [];
let maxPoints = 5;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(240);

  saveMousePosition();
  drawTail();
}


function saveMousePosition() {
 
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {

    xs.push(mouseX);
    ys.push(mouseY);

    
    if (xs.length > maxPoints) {
      xs.shift();
      ys.shift();
    }
  }
}


function drawTail() {
  
  for (let i = 0; i < xs.length; i++) {

    let diameter = 20 - (maxPoints - 1 - i) * 2;

    fill(100, 150, 255);
    noStroke();
    circle(xs[i], ys[i], diameter);
  }
}
