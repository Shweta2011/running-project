var pathImg;
var path;
var runner;
var runnerImg;
var invisibleGroundLeft;
var invisibleGroundRight;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg1 = loadImage("Runner-1.png");
  runnerImg2 = loadImage("Runner-2.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");  //DID NOT WORK
  //runnerImg = loadImage("Runner-1.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,200);
  runner.addImage(runnerImg1);
  runner.addImage(runnerImg2);
  runner.addAnimation(runnerImg1); //DID NOT WORK
  runner.addAnimation(runnerImg2);
  //runner.addImage(runnerImg);

  runner.scale = 0.1;

  invisibleGroundLeft = createSprite(400,200,70,400);
  invisibleGroundRight = createSprite(0,200,70,400);
  invisibleGroundLeft.visible = true;
  invisibleGroundRight.visible = true;
}

function draw() {
  background(0);

  //make mouse control runner
  runner.x = World.mouseX;

  //set left and right boundaries for runner
  runner.collide(invisibleGroundLeft);
  runner.collide(invisibleGroundRight);
  drawSprites();
 
  //repeat the background
  if(path.y > 400){
    path.y = height/2;
  }
}
