function setup() {
  createCanvas(400, 400);
  //fill(randomGaussian(200,25));
  background(210); // Draw once to give a little color
}
function draw() {
} // Empty draw() keeps the program running
function mousePressed() {
  fill(randomGaussian(200,30),randomGaussian(190,30),randomGaussian(190,30));
  let x = randomGaussian(100, 45);
  let y = randomGaussian(100, 35);
  rect(mouseX, mouseY, x, y);
  
  
}