let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
//  noCursor();
}

function draw() {
  background(255, 255, 255);
  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 30, 30);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
