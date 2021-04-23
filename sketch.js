var rama,arjuna,bheeema,ravana,backgroundimg,punch,punchicon,karna,duryodana;
var RamaSprite,RavanaSprite,punchSprite,p1,arjunaSprite,karnaSprite;
var bheeemaSprite,duryodanaSprite;
var f;
var gameState = 0;

function preload(){
  rama=loadImage("images/rama.png");
  arjuna=loadImage("images/arjuna.png");
  bheeema=loadImage("images/bheema.png");
  ravana=loadImage("images/ravana.png");
  backgroundimg=loadImage("images/background.png");
  punch=loadImage("images/punch.png");
  punchicon=loadImage("images/icon punch.png");
  karna=loadImage("images/karna.png");
  duryodana=loadImage("images/duryodana.png");
}

function setup() {
  createCanvas(600,600);

  RamaSprite=createSprite(100,400,50,100);
  RamaSprite.addImage(rama);

  RavanaSprite=createSprite(500,400,50,100);
  RavanaSprite.addImage(ravana);
  RavanaSprite.scale=0.5;

  arjunaSprite=createSprite(100,400,50,100);
  arjunaSprite.addImage(arjuna);

  karnaSprite=createSprite(500,400,50,100);
  karnaSprite.addImage(karna);

  bheeemaSprite=createSprite(100,400,50,100);
  bheeemaSprite.addImage(bheeema);

  duryodanaSprite=createSprite(500,400,50,100);
  duryodanaSprite.addImage(duryodana);

  ground=createSprite(300,580,600,10);
  ground.visible = false;

  f= new form();

  RamaSprite.collide(ground);
  RavanaSprite.collide(ground);
  RamaSprite.velocityY=5;
  RavanaSprite.velocityY=5;

  arjunaSprite.collide(ground);
  karnaSprite.collide(ground);
  arjunaSprite.velocityY=5;
  karnaSprite.velocityY=5;

  bheeemaSprite.collide(ground);
  duryodanaSprite.collide(ground);
  bheeemaSprite.velocityY=5;
  duryodanaSprite.velocityY=5;

  punchSprite=createSprite(100,100,50,50);
  punchSprite.addImage(punchicon);
}

function draw() {
  background(255,255,255);
  if(gameState === 0){
    RamaSprite.collide(ground);
    RavanaSprite.collide(ground);
    arjunaSprite.collide(ground);
    karnaSprite.collide(ground);
    f.display();
  }

  if(gameState === 1){
    f.hide();
    background(backgroundimg);
    RamaSprite.collide(ground);
    RavanaSprite.collide(ground);
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    drawSprites();
  }

  if(gameState === 2){
    f.hide();
    background(backgroundimg);
    arjunaSprite.collide(ground);
    karnaSprite.collide(ground);
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    drawSprites();
  }

  if(gameState === 3){
    f.hide();
    background(backgroundimg);
    bheeemaSprite.collide(ground);
    duryodanaSprite.collide(ground);
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    drawSprites();
  }
}

function punches(){
  p1=createSprite(100,500,50,50);
  p1.addImage(punch);
  p1.velocityX=5;
  p1.lifetime = 155;
}