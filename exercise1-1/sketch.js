let diameters = [360, 280, 200, 150];
let colourVals = [60, 140, 180, 255];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);


  for (let i = 0; i < diameters.length; i++) {
    fill(colourVals[i]);   
    noStroke();
    circle(width / 2, height / 2, diameters[i]);
  }
}

function mousePressed() {

  let last = colourVals.pop();


  colourVals.unshift(last);
}
