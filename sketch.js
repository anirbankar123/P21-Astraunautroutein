var bg,sleep, brush, gym, eat, bath, move;
var astronaut;
var edges;
var a, activity;
function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  activity = new Activity(a);

}

function draw() 
{
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving south-east",20, 115);
  text("n key = Moving north-west",20, 125);
  text("k key = Moving south-west",20, 135);
  text("l key = Moving north-east",20, 145);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
if(keyDown("UP_ARROW"))
  {
  a=0;
  activity.display();
  }

if(keyDown("DOWN_ARROW")){
a=1;
activity.display();
}

  
  if(keyDown("LEFT_ARROW"))
  {
    a=2;
  activity.display();
  }
  
  if(keyDown("RIGHT_ARROW"))
  {
    a=3;
    activity.display();
  }
  
  if(keyDown("m"))
  {
    a=4;
    activity.display();
  }
  
  if(keyDown("n"))
  {
    a=5;
    activity.display();
  }
  
  if(keyDown("k"))
  {
    a=6;
    activity.display();
  }
  
  if(keyDown("l"))
  {
    a=7;
    activity.display();
  }

  //activity.display();
}

