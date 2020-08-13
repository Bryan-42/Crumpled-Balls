
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,leftS,middle,rightS;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(120,400,25);

	ground = new Ground(400,650,800,20);

	leftS = new Dustbin(530,590,20,100);
	middle = new Dustbin(610,630,140,20);
	rightS = new Dustbin(682,590,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0); 
  Engine.update(engine);
  paper.display();
  ground.display();
  leftS.display();
  middle.display();
  rightS.display();
  keyPressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.Body, paper.Body.position, {x:85,y:-85})
	}
}