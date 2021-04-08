var starImg,bgImg;
var star, starBody;
var fairy;
var fairyImage;
var fairyVoice

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 600);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy = createSprite(100, 450);
	fairy.addAnimation("fairy", fairyImage);
	fairy.scale = 0.15

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(655, 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //write code to stop star in the hand of fairy
  if (starBody.position.y > 450 && starBody.position.x > fairy.x && fairy.x > 550)  {
	  fairy.velocityX = 0;
	  starBody.isStatic = true;
	  fairyVoice.stop();
  }


  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.setVelocity(-2, 0);
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.setVelocity(2, 0);
	}
    
	if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
		fairyVoice.play();
	}

	//writw code to move fairy left and right
	
}
