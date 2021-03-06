const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ball_options = {
    restitution:1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
}

function draw() {
  background("magenta");  
 
  Engine.update(myEngine);
  ellipseMode(RADIUS);
  noStroke();
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("black");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  //console.log(box.position.x);
  //console.log(box.position.y);
}