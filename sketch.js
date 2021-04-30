var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyS,fairyImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
   fairyImg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairyS = createSprite(200,600,10,10)
	fairyS.addAnimation("fairy",fairyImg)
    fairyS.scale = 0.2
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(keyDown ("right")){
	fairyS.x =fairyS.x+10
	
	
	
	}
	
	if(keyDown("left")){
	fairyS.x = fairyS.x-10
	
	
	
	}

if(star.y>560 && starBody.position.y >560){
	Matter.Body.setStatic(starBody,true);



}


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right









	
}
