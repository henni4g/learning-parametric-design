function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0);
  noStroke();

  fill("orange")
  circle(300, 300, 300)
  fill("yellowgreen")
  circle(200, 200, 300);
  fill("red")
  circle(100, 100, 300);
  // quad for heart
  fill (255, 0, 0)
	quad(302, 299, 275, 325, 300, 350, 325, 325);
	arc(288, 313, 35, 35, PI - QUARTER_PI, 0);
	arc(312, 313, 35, 35, PI - QUARTER_PI, QUARTER_PI);
 fill("white")
  quad(202, 199, 175, 225, 200, 250, 225, 225);
	arc(188, 213, 35, 35, PI - QUARTER_PI, 0);
	arc(212, 213, 35, 35, PI - QUARTER_PI, QUARTER_PI);
fill("orange")
  quad(102, 99, 75, 125, 100, 150, 125, 125);
	arc(88, 113, 35, 35, PI - QUARTER_PI, 0);
	arc(112, 113, 35, 35, PI - QUARTER_PI, QUARTER_PI);
}
