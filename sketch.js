const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options
    {
        isStatic: true
    }
ground = Bodies.rectangle(200,100,50,50);
World.add(world,ground);
console.log(ground.type);
console.log(ground.position.x);
console.log(ground.position.y);    
}
  
  function draw() {
    background(0);  
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,50,50);
}