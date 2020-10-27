var mRect,rRect;


function setup() {
  createCanvas(800,400);
  mRect=createSprite(200,100,20,20);
  rRect=createSprite(200,200,40,40);
  mRect.shapeColor="green";
  rRect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;
  if (mRect.x-rRect.x===mRect.width/2+rRect.width/2) {
    mRect.shapeColor="red";
    rRect.shapeColor="red";
  }
  drawSprites();
}