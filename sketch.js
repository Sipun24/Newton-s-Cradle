
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//press any key after pressing UP_ARROW
function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,40,500,20)
	bobobject1 = new Bob(200,470,100)
	bobobject2 = new Bob(300,470,100)
	bobobject3 = new Bob(400,470,100)
	bobobject4 = new Bob(500,470,100)
	bobobject5 = new Bob(600,470,100)
    rope1= new Rope(bobobject1.body,roof.body,-100*2,0);
    rope2= new Rope(bobobject2.body,roof.body,-50*2,0);
    rope3= new Rope(bobobject3.body,roof.body,-0*2,0);
    rope4= new Rope(bobobject4.body,roof.body,50*2,0);
    rope5= new Rope(bobobject5.body,roof.body,100*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  rectMode(CENTER);
  Engine.update(engine)
  
  roof.display();
  bobobject1.display();
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  
  drawSprites();
}
function keyPressed() { 
	if (keyCode === 38) 
	{ Matter.Body.applyForce(bobobject5.body,bobobject5.body.position,{x:100,y:100}); } 

	
}

