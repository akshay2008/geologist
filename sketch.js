const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5, box6;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1000, 20);

  box1 = new Box(900, 100, 50, 150);

  box2 = new Box2(200, 100, 60, 100);
  box3 = new Box2(400, 100, 150, 100);
  box4 = new Box3(550, 100, 100, 20);
  box5 = new Box4(750, 100, 20, 90);
  box6 = new Box5(950, 200, 200, 200);


  
}

function draw() {
  background(bg);
  Engine.update(engine);
  Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();

}
