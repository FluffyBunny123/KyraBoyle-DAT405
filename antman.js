//these allow the code to call on the specific functions
//antmanData is what calls on the JSON file
let antmanData;
//antmanthumb helps to get the image up
let antmanthumb;

//this loads the JSON
function preload() {
//this links the antmanData to the JSON
  antmanData = loadJSON("antman.json");
}

//this is what sets up the page
function setup() {
//console log lets me see what I can call on in antmanData
  console.log(antmanData);
//sets the size of the screen you are working with
  createCanvas(1280, 720);
//sets the text to all be in the center of the page
  textAlign(CENTER);
//sets the text size
  textSize(24);
  noLoop();
//this is calling on the image within the JSON it is also setting its size and where it is on the canvas
  loadImage(antmanData.data.results[0].thumbnail.path + "." + antmanData.data.results[0].thumbnail.extension, function(antmanthumb){
    image(antmanthumb, width/3, height/2.5, 400, 400);
  });
}

//this allows objects and text to appear on the screen
function draw() {

//sets the background colour
  background(230, 184, 0);
//sets the colour of the text
  fill(255);
//all these are callig on the JSON for something specific which is an
//indevidual peice of text that they are mapped too
  text("The name of the superhero is " +antmanData.data.results[0].name, width/3.5, height/8, 500, 500);
  text("Description: " +antmanData.data.results[0].description, width/8.5, height/4, 1000, 600);
  text("Comics: " +antmanData.data.results[0].comics.available, width/3.3, height/5, 500, 500);

}
