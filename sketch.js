const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "snow3.jpg";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
}

function draw() {
  Engine.update(engine);
    if(backgroundImg)
        background(backgroundImg);
    

  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "snow3.jpg";
  }
  else{
      bg = "snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}