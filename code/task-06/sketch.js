/*Code der per generative art und perlin noise ein Muster erzeugt, 
das durch die eingabe von einem Datum TT/MM/YY farblich personalisiert wird.
*/
c = 0;//variable
function setup() {
  createCanvas(800, 800);//flächengröße
  background(255);//hintergrund weiss
  noStroke(); //keine outlines
  rectMode(CENTER); //fixpunkt wird in die mitte gelegt anstatt obe links

  pixelDensity(4); //schärfe
  rect_dims = [50, 400]; //benennt die min/max Dimensionen (>50,<400
  n_patches = 7;//variable
  rect_locations_top = [];
  rect_locations_bottom = [];
  m = 20;//variable
  inputDay = createInput("1")//eingabefeld
  inputMonth = createInput("1")//eingabefeld
  inputYear = createInput("1")//eingabefeld
  button = createButton("BOOP!");//knopf
  button.mouseClicked(draw);//lädt die eingabe auf knopfdruck wegen den ladezeiten
 

  var Day = inputDay.value()//nimmt die eingegebene Zahl
  var Month = inputMonth.value()//nimmt die eingegebene Zahl
  var Year = inputYear.value()//nimmt die eingegebene Zahl
  

  
  colors = [//farbpalette1
    [ 202 , 53, 138],
    [179, 202, 224],
    [207, 56, 149],
    [246, 217, 18],
    [252, 132, 5],
  ];
  

  colors2 = [//farbpalette2
    [242, 235, 138],
    [237, 138, 10],
    [237, 54, 26],
    [255, 197, 199],
    [75, 138, 95],
  ];

  for (i = 0; i < n_patches; i++) {
    rect_locations_top.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) + m,
          (width / n_patches) * (i + 1) + 100
        ),
      ],
      [random(-m, m), random(height - m, height + m)],
    ]);
    rect_locations_bottom.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) - m,
          (width / n_patches) * (i + 1) + m
        ),
      ],
      [
        random(height / 2 + 50, height / 2 + 100),
        random(height - m, height + m),
      ],
    ]);
  }
}

function draw(Day, Month, Year) {
  background(255)//hintergrund
  for (j = 0; j < 700; j++) {
    // draw_rect([255,0,110], [0,width/2], [0,height])
    // draw_rect([131,56,236], [width/2,width], [0,height])
    // draw_rect([251,86,7], [width/2,width], [0,(height/3)])
    // draw_rect([255,190,11], [0,width/2], [0,(height/2)])

    for (k = 0; k < n_patches; k++) {
      draw_rect(
        colors[k % colors.length],
        rect_locations_top[k][0],
        rect_locations_top[k][1]
      );
      if (random() < 0.75) {
        draw_rect(
          colors2[k % colors.length],
          rect_locations_bottom[k][0],
          rect_locations_bottom[k][1],
          inputDay.value(), inputMonth.value(), inputYear.value()
        );
      }
    }
  }


  // noise on top
  w = 1;
  for (i = 0; i < height; i += w) {
    for (j = 0; j < width; j += w) {
      n = random();
      if (n > 0.6) {
        fill(255, 255, 255, 10);
      } else {
        fill(0, 0, 0, 10);
      }
      rect(i, j, w);
    }
  }

  noLoop();
}

function draw_rect(color, x, y, Day, Month, Year) {
  r = random();
  if (r < 0.5) {
    blendMode(OVERLAY);
  } else {
    blendMode(BLEND);
  }
  fill(color[0]-(Day*8.22), color[1]-(Month*21.25), color[2]-(Year*2.57), 70);
  rect(
    random(x[0], x[1]),
    random(y[0], y[1]),
    random(rect_dims[0], rect_dims[1]),
    random(rect_dims[0], rect_dims[1])
  );
  
}

function keyTyped() {//bild speichern bei s drücken
  if (key === "s") {
    save("myCanvas.jpg");
  }
}