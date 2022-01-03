var canvas,bg;
var tom, tomImg1,tomImg2, tomImg3;
var jerry, jerryImg1,jerryImg2, jerryImg3;

function preload() {
    bg=loadImage("images/garden.png");
    tomImg1= loadImage("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadImage("images/tomFour.png");
    jerryImg1=loadImage("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadImage("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addImage("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addImage("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    keyPressed();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addImage("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeImage("tomLastImage");
        jerry.addImage("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeImage("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}