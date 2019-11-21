var inputBox;
var output;
function setup() {
  createCanvas(400,400);
  background(100,200,255);
  inputBox = createInput();
  inputBox.position(100,100);
  inputBox.input(para);
  output = createP('');
}

function para() {
  output.html(inputBox.value());
}