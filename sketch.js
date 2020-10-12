const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg;
var stone,stoneImg;
var boy,boyImg;
var mango1,mango2,mango3,mangoImg;

function preload(){
	treeImg = loadImage("Plucking mangoes/tree.png");
	stoneImg = loadImage("Plucking mangoes/stone.png");
	boyImg = loadImage("Plucking mangoes/boy.png");
	mangoImg = loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,50);

	tree = createSprite(1000,200,70,40);
	tree.addImage(treeImg);
	tree.scale = 0.3;

	boy=createSprite(350,320,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	stone=createSprite(290, 260, 10,10);
	stone.addImage(stoneImg);
	stone.scale=0.1; 

	mango1=createSprite(900,150,70,40);
	mango1.addImage(mangoImg);
	mango1.scale = 0.1;

    mango2=createSprite(1150,150,70,40);
	mango2.addImage(mangoImg);
	mango2.scale = 0.1;

	mango3=createSprite(950,120,70,40);
	mango3.addImage(mangoImg);
	mango3.scale = 0.1;

	mango4=createSprite(1050,90,70,40);
	mango4.addImage(mangoImg);
	mango4.scale = 0.1;

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(170);

  ground.display();
  tree.display();
 
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

