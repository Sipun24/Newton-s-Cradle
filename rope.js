class Rope {
  constructor(body1,body2,offsetX,offsetY) {
this.offsetX = offsetX;
this.offsetY = offsetY;
var options ={
bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX,y:this.offsetY}
}

this.Rope = Constraint.create(options);
World.add(world,this.Rope)
}
  display(){
    strokeWeight(1)

var pointA = this.Rope.bodyA.position
var pointB = this.Rope.bodyB.position
var Any1X = pointA.x
var Any1Y = pointA.y
var Any2X = pointB.x+this.offsetX
var Any2Y = pointB.y+this.offsetY
line (Any1X,Any1Y,Any2X,Any2Y);


  }
}