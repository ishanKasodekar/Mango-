
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var ground;
var tree,treeImg;
var boy,boyImg;
var bgImg;
var launcher;
var mango;
var launchForce =100;
var launcherObject;


function preload()
{
boy=loadImage("images/boy.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone(235,420,30);
	 ground = new Ground(width/2,600,width,20);
	 tree = new Tree(1050,580);
	 launcherObject = new Launcher(stone.body,{x:235,y:420})
	  mango2 = new Mango(1100,100,30);
	  mango3 = new Mango(1100,100,30);
	  mango4 = new Mango(1000,200,30);
	  mango5 = new Mango(1000,150,30);
	  mango6 = new Mango(900,230,25);
	  mango7 = new Mango(1140,150,25);
	  mango8 = new Mango(1100,230,25);
	  mango9 = new Mango(1200,200,25);
	  mango10 = new Mango(1120,50,25);


	Engine.run(engine);
  
}


function draw() {
background(230);
textSize(25);
text("Press Space to get a 2nd chance to play",50,50);
image(boy,200,340,200,300);  
stone.display();
  //mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  ground.display();
  tree.display();
  launcherObject.display();
  detectionCollision(stone,mango2);
  detectionCollision(stone,mango3);
  detectionCollision(stone,mango4);
  detectionCollision(stone,mango5);
  detectionCollision(stone,mango6);
  detectionCollision(stone,mango7);
  detectionCollision(stone,mango8);
  detectionCollision(stone,mango9);
  detectionCollision(stone,mango10);

  
 
}
function detectionCollision(s,m){
mangoBodyPosition=m.body.position;
stoneBodyPosition=s.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=m.r+s.r){
Matter.Body.setStatic(m.body,false);

}
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
launcherObject.fly();
}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:235,y:420});
	launcherObject.attach(stone.body);
	}
}
