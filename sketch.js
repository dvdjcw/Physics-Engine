const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
object = Bodies.rectangle(200,100,50,50);
World.add(world,object);
console.log(object.type);
console.log(object.position.x);
console.log(object.position.y);    
}
  
  function draw() {
    background(0);  
    rectMode(CENTER);
    rect(200,200,50,50);
}