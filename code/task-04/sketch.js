const sketchHeight = 700;
const sketchWidth = 400;
let sliderC; 
let textInput;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  //circle
  sliderC = createSlider(0, 200, 50, 10);
  sliderC.position(0, 700);
  sliderC.size(100);
 //rect
  sliderRX = createSlider(0, 200, 50, 10);
  sliderRX.position(100, 700);
  sliderRX.size(100);
  sliderRY = createSlider(0, 200, 50, 10);
  sliderRY.position(100, 750);
  sliderRY.size(100);

  sliderR2X = createSlider(0, 200, 50, 10);
  sliderR2X.position(100, 800);
  sliderR2X.size(100);
//rect mitte
  sliderRMX = createSlider(0, 200, 50, 10);
  sliderRMX.position(200, 700);
  sliderRMX.size(100);
  sliderRMY = createSlider(0, 200, 50, 10);
  sliderRMY.position(200, 750);
  sliderRMY.size(100);
  //text header

  textInput = createInput(); // default value
  textInput.position(10, 10); // position of the input
  textInput.size(372, 45); // size of input
//text Footer
  textInput = createInput(); // default value
  textInput.position(10, 640); // position of the input
  textInput.size(372, 45); // size of input
  
  

}




function draw() {
  background("beige");
  circle(80, 150, sliderC.value());
  circle(80, 500, sliderC.value())

  rect(200,80, sliderRX.value(),sliderRY.value()) //oben links
  rect(250,80, sliderR2X.value(),sliderRY.value()) //oben rechts

  rect(10, 10, 380, 50) //header
  rect(10, 640, 380, 50) //footer

  rect(10, 250, sliderRMX.value(), sliderRMY.value())




 //Rect random darf nicht loopen aber die slider brauchen loop
  //rect(200, 250, sliderRMX.value(), random(360))
  // NoLoop()
  
 text(textField.value(), 20, 20);


}

