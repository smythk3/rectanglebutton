var x1 = 400;
var x2 = 250;


function setup() {
  createCanvas(800,500);
  background(255);
  
}

function draw() {
  background(255);
  // make it so that when mouse is >400 but kess than 600, the screen goes black
  fill(0);
  rect(x1, x2, 50, 50);
  if(mouseX > 400 && mouseX < 600) {
    background(0);
  }
  
}