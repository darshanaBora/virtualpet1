var dog,happyDog,database,foodS;

var foodStock = 20;

var happyDogImage,dogImage

function preload(){
  happyDogImage = loadImage("dog.png");
  dogImage = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(255,400,20,20);
  dog.addImage("dog",dogImage);
  dog.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog",happyDogImage);
  }
  drawSprites();
  //add styles here

}



