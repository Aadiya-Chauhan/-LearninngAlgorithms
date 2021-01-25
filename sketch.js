var movingRect, fixedRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 150, 100);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(200, 200, 80, 130);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <movingRect.width/2 + fixedRect.width/2 
    && fixedRect.y - movingRect.y <movingRect.height/2 + fixedRect.height/2 
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 ){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}

// movingRect.width/2 + fixedRect.width/2 
//= movingRect.x - fixedRect.x

