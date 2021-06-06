const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup(){
    var canvas = createCanvas(900,750);

    engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(5,375,10,750);
    wall2 = new Wall(895,375,10,750);
    wall3 = new Wall(450,5,900,10);
    wall4 = new Wall(450,745,900,10);

    box1 = new Box1(170,60,80,80);

    box2 = new Box2(420,60,80,80);

    box3 = new Box3(660,60,80,80);

   


}

function draw(){
    background("gray");

    Engine.update(engine);

    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

    box1.display();
    box2.display();
    box3.display();

 

    drawSprites();
}