function preload(){
  // preload assets
}

let rectA = 50;
let rectB = 50;
let a = 20;
let b = 20;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (250)
  blendMode(DARKEST)

  line(0,93,200,93)
  line(307,0,307,200)
  line(400,307,200,307)
  line(93,400,93,200)
  

  fill(250);
  let x = 3
  while (x >1 ) {
    let y = 3 ;
    while (y >1 ) {
      square(200 - x*25 , 200 - x*25 , 50 * x);
      
      y -= 1;
    }
    x -= 1
  }
  rotate(Math.PI / 180 * 45)
  fill(255);
  let z = 3
  while (z >1 ) {
    let w = 3 ;
    while (w >1 ) {
      square(283 - z*25 ,0 - z*25 , 50 * z);
      
      w -= 1;
    }
    z -= 1
  }

   
}

