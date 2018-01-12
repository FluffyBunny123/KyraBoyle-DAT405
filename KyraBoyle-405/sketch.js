//these are variables that will store the new objects from the class circle
let circleObject1;
let circleObject2;
let circleObject3;
let circleObject4;
let circleObject5;
let circleObject6;
let circleObject7;
let circleObject8;
let circleObject9;
let circleObject10;
let circleObject11;
let circleObject12;
let circleObject13;
let circleObject14;


//this allows for multiple JSON to be called on at once
let names = ['antman', 'blackpanther', 'blackwidow', 'captainamerica', 'falcon', 'hawkeye', 'hulk', 'ironman', 'scarletwitch', 'spiderman', 'thor', 'vision', 'warmachine', 'wintersoldier'];
var marvelData = [];

//this loads the JSON
function preload() {

//this links the all the names above to the JSON
      for (var i in names) {
      marvelData.push(loadJSON(names[i] + ".json"));
  }


}

function setup() {
createCanvas(1280, 720);

//this sets all the variables for the object and allows it to randomly move within the boarder
  circleObject1 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 0);
  circleObject2 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 1);
  circleObject3 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 2);
  circleObject4 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 3);
  circleObject5 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 4);
  circleObject6 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 5);
  circleObject7 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 6);
  circleObject8 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 7);
  circleObject9 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 8);
  circleObject10 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 9);
  circleObject11 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 10);
  circleObject12 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 11);
  circleObject13 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 12);
  circleObject14 = new circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50), 13);
}

function draw() {
  background(51, 204, 255);

//Call each object's function to run the necessary code
  circleObject1.moveFunction();
  circleObject1.displaycircle();

  circleObject2.moveFunction();
  circleObject2.displaycircle();

  circleObject3.moveFunction();
  circleObject3.displaycircle();

  circleObject4.moveFunction();
  circleObject4.displaycircle();

  circleObject5.moveFunction();
  circleObject5.displaycircle();

  circleObject6.moveFunction();
  circleObject6.displaycircle();

  circleObject7.moveFunction();
  circleObject7.displaycircle();

  circleObject8.moveFunction();
  circleObject8.displaycircle();

  circleObject9.moveFunction();
  circleObject9.displaycircle();

  circleObject10.moveFunction();
  circleObject10.displaycircle();

  circleObject11.moveFunction();
  circleObject11.displaycircle();

  circleObject12.moveFunction();
  circleObject12.displaycircle();

  circleObject13.moveFunction();
  circleObject13.displaycircle();

  circleObject14.moveFunction();
  circleObject14.displaycircle();

}

//Definition of the class circle
class circle {

  constructor(x, y, speedX, speedY, size, character){
//Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = 80;
    this.character = character;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
//this lets the image load and calls on the JSON
    let fileName = marvelData[this.character].data.results[0].thumbnail.path + "." + marvelData[this.character].data.results[0].thumbnail.extension;
    this.image = loadImage(fileName);
  }

//Class function that takes care of motion and collision
  moveFunction(){
//Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

//Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

//Class function that displays the image
  displaycircle(){
//this lets the image load
    image(this.image, this.x, this.y, this.size, this.size);
  }
}
