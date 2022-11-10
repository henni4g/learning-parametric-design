function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background("#7aaeff");
  noStroke();
  
  //Regenbogen:

  //pink
  fill("#f2308e")
  circle(200, 350, 500)

  //Orange
  fill("#f7861b")
  circle(200, 375, 500)

  //Gelb
  fill("#ffee00")
  circle(200, 400, 500)

  //Grün
  fill("#9dff00")
  circle(200, 425, 500)

  //Blau
  fill("#00e1ff")
  circle(200, 450, 500)

  //Lila
  fill("#b127e3")
  circle(200, 475, 500)

  //Hintergrundfarbe zum cutten
  fill("#7aaeff")
  circle(200, 500, 500)

//Wolken:
  fill(240)
  circle(0,380, 100)
  circle(50,400, 100)
  circle(100,420, 100)

  circle(400,380, 100)
  circle(350,400, 100)
  circle(300,420, 100)

  //Herz:
  fill("red")
  quad(202, 199, 175, 225, 200, 250, 225, 225);
	arc(188, 213, 35, 35, PI - QUARTER_PI, 0);
	arc(212, 213, 35, 35, PI - QUARTER_PI, QUARTER_PI);

  
}
