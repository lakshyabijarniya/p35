//Create variables here
var dog,happyDog;
var database,foodS,foodStock;
var dogImg,happyDog;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  foodStock=database.ref('Food');
  foodStock.on('value',readStock);

  foodStock.set(20)

  dog=createSprite(200,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
}


function draw() {  
  background(46,139,87);
  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog)
  }

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg)
}

 
  fill("yellow")
  stroke(1000000000)
  text("REMAINING FOOD:"+foodS,100,50)
  text("NOTE: PRESS UP_ARROW Key To Feed Drago Milk !",100,20)

  if(foodS===0){
    foods=20
  }
  drawSprites();
}

function readStock(data){
foodS=data.val()
}

function writeStock(x,){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}



