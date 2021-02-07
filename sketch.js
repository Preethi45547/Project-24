
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	hammer = new Hammer(230,120,150,PI/7);
	stone = new Stone(100,100)
	rubber = new Rubber(400,400)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display(); 
  hammer.display();       
  stone.display();
  rubber.display();


  drawSprites();
 
}



