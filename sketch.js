
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,100);

	ground = new Ground(600,380,1200,20);
	
	dustbin1 = new Dustbin(880,360,250,20);
	dustbin2 = new Dustbin(750,340,20,90)
	dustbin3 = new Dustbin(1000,340,20,90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball1.display();

  ground.display();

  

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-70});

	}

}



