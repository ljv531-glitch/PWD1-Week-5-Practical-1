let points = [];   

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(240);

  drawShapes();
}


function drawShapes() {
  fill(0);
  noStroke();
  for (let p of points) {
    circle(p.x, p.y, 20);
  }
}


function mousePressed() {
  points.push({ x: mouseX, y: mouseY });
}


function keyPressed() {
  if (key === 'z' || key === 'Z') {
    points.pop(); 
  }
}
