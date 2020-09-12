const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var tree, treeImg, boy, boyImg;
var Link;

function preload()
{
 treeImg = loadImage("tree.png");
 boyImg = loadImage("boy.png");
}

function setup()
 {
	createCanvas(1200, 600);

  engine = Engine.create();
  
	world = engine.world;
    
	
  tree = createSprite(900,400,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.5;

  boy = createSprite(200,525,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
  ground = new Ground(600,600,1200,20);
  
  stone = new Stone(200,200,70);
  
  Link = new Launcher(stone.body,{x:145, y:470});
  
  mango1 = new Mango(750,300,50);
  
  mango2 = new Mango(800,200,50);
  
  mango3 = new Mango(1100,300,50);
  
  mango4 = new Mango(975,300,50);
  
  mango5 = new Mango(950,200,50);
  
  mango6 = new Mango(850,300,50);
  
	
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  Link.display();
  ground.display();
  stone.display();  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

}


function mouseDragged()
{
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 Link.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		Link.attach(stone.body);
	}
}