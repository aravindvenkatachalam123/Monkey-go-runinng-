var monkey,monkeyImage,bananaImage,obstacleImage,obstaclegroup,back,bananagroup,bmg;
var score = 0;
var out = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  bmg=loadImage("jungle.jpg");
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
 back = createSprite(400,400,10,10);
  back.addImage("bg",bmg);

  
  switch(score){
    case 10: monkey.scale= 0.17;
      break;
    case 20: monkey.scale= 0.19;
      break;
    case 30: monkey.scale= 0.21;
      break;
    case 40: monkey.scale= 0.23;
      break;
    case 50: monkey.scale= 0.25;
      break;
    default: break;
  } 
  
//back.visible=false;
  back.x = back.width /2;
  monkey = createSprite(50,350,10,10);
monkey.addAnimation("Monkey",monkeyImage);
  monkey.scale = 0.2;
 obstaclegroup=new Group();
 bananagroup=new Group();
}

function draw() {
  background("back");
  if (back.x < 0){
    back.x = back.width/2;
   }
              
    if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY= monkey.velocityY+0.6;
  edges = createEdgeSprites();

monkey.collide(edges[3])
  if(gameState===PLAY){
  if(bananagroup.isTouching(monkey)){
     score++;
    bananagroup.destroyEach() ; 
  }
    back.velocityX=-5;
    food(); 
  spawnObstacles();
  }
  if(obstaclegroup.isTouching(monkey)){
    obstaclegroup.destroyEach()
    out = out+1;
    
    
  }
  else if(gameState===END){
  
        textSize=50;
    
   text("gameover",190,190);
    back.velocityX=0;
     //monkey.velocityX = 0;
    obstaclegroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
    obstaclegroup.destroyEach();
    bananagroup.destroyEach()
//obstaclegroup.visible=false;
//bananagroup.visible=false;
  
    
      
    }
  if(out===1){
    monkey.scale = 0.1;
  }
  if(out>=2){
    gameState = END;
  }
    
  
  

  drawSprites();
  text("score:"+score,200,40);
}
function food(){
  if(World.frameCount % 80 === 0) {
  var banana = createSprite(100,100,10,10);
    banana.addImage("banana",bananaImage);
  banana.scale=0.05;
    
  banana.y=random(120,300);
  banana.x=random(300,380);
  banana.velocityX=-5;
  banana.lifetime= -30;
  bananagroup.add(banana);
    
  }
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,375,10,40);
    obstacle.addImage("obs", obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale = 0.15;
    obstacle.lifetime = -70;
  
    obstaclegroup.add(obstacle);
  }

}









