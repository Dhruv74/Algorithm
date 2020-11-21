var mr
var fr

function setup() {
  createCanvas(1200,800);
  mr = createSprite(200, 200, 50, 80);
  fr = createSprite(400, 200, 80, 30)
  mr.shapeColor = "green"
  fr.shapeColor = "green"
  mr.debug = true
  fr.debug = true
}

function draw() {
  background(0); 
mr.x = World.mouseX
mr.y = World.mouseY
var z = mr.width/2 + fr.width/2
var a = mr.height/2 + fr.height/2
if(mr.x-fr.x<z&&fr.x-mr.x<z&&mr.y-fr.y<a&&fr.y-mr.y<a){


mr.shapeColor = "red"
fr.shapeColor = "red"

}
else{
  mr.shapeColor = "green"
  fr.shapeColor = "green"
}



 
  console.log("a",a)
  console.log("mr.y",mr.y)
  console.log("fr.y",fr.y)


  drawSprites();
}