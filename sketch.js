
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup
var score = 0
var survivalTime = 0
var ground , groundImage
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)

  
  ground = createSprite(300,390,600,5)
  ground.velocityX = -5
  ground.x = ground.width/2
  ground.scale = 1.5
  
  monkey = createSprite(100,347,20,20)
  monkey.addAnimation("m",monkey_running)
  monkey.scale = .1
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
background("lightgreen")
  //console.log(ground.x) 
  //survival time
  stroke("black")
  fill("black")
  
  text("Survival Time:  "+survivalTime,100,50)
  survivalTime = Math.ceil(frameCount/frameRate())

    monkey.collide(ground)

  
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  if(keyDown("space") && monkey.y >= 300){  
    monkey.velocityY = -18  
  }
  monkey.velocityY = monkey.velocityY +0.8
 
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
  }
  showfruits()
  drawSprites();
  showobstacles();
  
}

function showfruits(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,200,20,20)
    banana.addImage("b",bananaImage)
    banana.scale = .1
    banana.velocityX = -8
    banana.y = Math.round(random(120,200))
    banana.lifetime = 75
    bananaGroup.add(banana);
  }  
}

function showobstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,340,20,20)
    obstacle.addImage("o",obstacleImage)
    obstacle.scale = .2
    obstacle.velocityX = -8
    obstacle.lifetime = 75
  obstaclesGroup.add(obstacle)
  }
}