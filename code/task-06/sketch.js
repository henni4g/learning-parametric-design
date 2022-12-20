// noprotect
c = 0;
function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  rectMode(CENTER);

  var inputD;
  var inputM;
  var inputY;

  pixelDensity(4);
  rect_dims = [50, 400];
  n_patches = 7;
  rect_locations_top = [];
  rect_locations_bottom = [];
  m = 20;
  inputDay = createInput("1")
  inputMonth = createInput("1")
  inputYear = createInput("1")
  button = createButton("BOOP!");
  button.mouseClicked(draw);
 

  var Day = inputDay.value()
  var Month = inputMonth.value()
  var Year = inputYear.value()
  
  
  // colors = [[202,190,11],
   //          [255,202,110],
   //          [131,56,202],
   //          [202,86,7]]
  // colors2 = [[131,56,236],
  //         [251,86,7],
  //         [255,190,11],
  //           [255,0,110]]
  
  colors = [
    [ 202 , 53, 138],
    [179, 202, 224],
    [207, 56, 149],
    [246, 217, 18],
    [252, 132, 5],
  ];
  

  colors2 = [
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
//function inputChange() {
  // notice "this.value()" to access the current value
  //TAG = parseInt(this.value());

function draw(Day, Month, Year) {
  background(255)
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

  // // white paint line
  // rect_dims2 = [10, 50]
  // for (j=0; j<1000; j++) {
  //   r = random()
  //   if (r < 0.5) {
  //     blendMode(HARD_LIGHT)
  //   } else {
  //     blendMode(BLEND)
  //   }
  //   fill(254,250,224,random(0,6))//"#98f5e1")
  //   rect(random(width/2.2,width/2), random(0,height), random(rect_dims2[0],rect_dims2[1]), random(rect_dims2[0],rect_dims2[1]))
  // }

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

function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}