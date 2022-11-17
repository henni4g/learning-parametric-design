const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}



function draw(){
  blendMode (MULTIPLY)
  background("#EEE1C6");
  stroke(255)
 
  


  
 // Mitte
 fill ("#A8D9FF",)
  beginShape();
  for(let angle = 0; angle < 360; angle += 12) {
    const radius = random(75, 100);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  //oben Rechts
  fill ("#DE78AB" )
  beginShape();
  for(let angle = 30; angle < 360; angle += 10) {
    const radius = random(75, 100);
    const x = radius/1.2 * cos(Math.PI / 180 * angle);
    const y = radius/1.2 * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth / 4, y + sketchHeight / 4);
  }
  endShape(CLOSE);
  //Rechts unten
  fill ("#C3E3A8")
  beginShape();
  for(let angle = 0; angle < 360; angle += 3) {
    const radius = random(75, 100);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius  * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth -100, y + sketchHeight -150 );
  }
  


  endShape(CLOSE);
  //Links Unten
  fill ("#D0BDF0")
  beginShape();
  for(let angle = 0; angle < 360; angle += 6) {
    const radius = random(75, 100);
    const x = radius/1.5 * cos(Math.PI / 180 * angle);
    const y = radius/1.5 * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth -300, y + sketchHeight -140 );
  }
  


  endShape(CLOSE);
  noLoop();


}
