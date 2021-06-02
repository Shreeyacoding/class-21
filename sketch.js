var fixedRect, movingRect;
var  car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200, 100, 50, 10);
  car.shapeColor = "purple";
  car.velocityX=4;
  car.debug = true;
  

  wall = createSprite(800,100,60,80);
  wall.shapeColor = "pink";
  wall.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car,wall)){
    car.shapeColor = "blue";
  wall.shapeColor = "orange";
}
else {
  car.shapeColor = "purple";
  wall.shapeColor = "pink";
}
BounceOff(car,wall);

  drawSprites();
}

function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  return true;
    }
    else{
      return false;
    }
  }

  function BounceOff(p1,p2){
    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2){
        p1.velocityX=(-1)*p1.velocityX;
      }
      else if(p1.y - p2.y < p2.height/2 + p1.height/2
        && p2.y - p1.y < p2.height/2 + p1.height/2){
          p1.velocityY=(-1)*p1.velocityY;
        }
  }