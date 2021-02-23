const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var flyer;

function setup() {
  createCanvas(800,400);
  flyer = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  //flyer.display();

  if(keyIsDown(LEFT_ARROW)){
    flyer.x = flyer.x -10
  }

  if(keyIsDown(LEFT_ARROW)){
    flyer.x = flyer.x +10
  }

  if(keyIsDown(LEFT_ARROW)){
    flyer.y = flyer.y -10
  }

  if(keyIsDown(LEFT_ARROW)){
    flyer.y = flyer.y +10
  }

  drawSprites();
}