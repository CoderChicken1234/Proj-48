var bg, bgImg, marsBgImg
var spaceShipImg, spaceShip
var venus;
var mars, marsImg;
var acid_planet;
var Kepler232b;
var gameState = 0;
var marsObject, venusObject, keplerObject, acidObject;
var marsTablet, marsTabletImg, marsSpaceTentTab, marsSpaceTentTabImg;
var marsSpaceTent;
var O2, O2img
var o2
var O2Bar = 200
var N2, N2img,  n2;
var man, manImg, man2
var exitButtonMars;
var N2bar = 200
var venusBgImg
var volcanos, volcanaosImg;
var volcanosez
var exitButtonVenus
var volcanoGroup
var volcanoGyserGroup, volcanoGyser, volcanoGyserImg;
var freezGun, freezGunImg;
var houseFunc = 0
var Human, HumanImg, HumanButton
var acidPlanetBgImage
var dragon, dragonButton, dragonImage;
var spaceShip2



function preload(){
bgImg = loadImage("./assets/Space BG.png")
spaceShipImg = loadImage("./assets/SpaceShip.png")
marsImg = loadImage("./assets/Mars.png")
marsBgImg = loadImage("./assets/MarsBg.png")
marsTabletImg = loadImage("./assets/Mars_tablet.png")
marsSpaceTentTabImg = loadImage("./assets/mars_spaceTent.png")
O2img = loadImage("./assets/O2.png")
N2img = loadImage("./assets/N2.png")
venusBgImg = loadImage("./assets/VenusBg.png")
volcanaosImg = loadImage("./assets/Volcanas.png")
volcanoGyserImg = loadImage("./assets/VolcanoGeyser.png")
freezGunImg = loadImage("./assets/Ice gun.png")
HumanImg = loadImage("./assets/Man.png")
acidPlanetBgImage = loadImage("./assets/Acid_planetBg.png")

}

function setup(){
createCanvas(1500,700);
background(bgImg)

if(gameState == 0){
  
spaceShip = createSprite(750,300,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3

  
spaceShip2 = createSprite(10050,10300,200,200)
spaceShip2.addImage("spaceShip",spaceShipImg)
spaceShip2.scale = 0.3

mars = createImg('./assets/Mars.png',"mars")
mars.position(600,0)
mars.size(250,250)
mars.mouseClicked(marsFunc)

dragonButton = createImg("./assets/DragonButton.png", "dragonBoss")
dragonButton.position(800, 480)
dragonButton.size(150,125)
dragonButton.mouseClicked(dragonFunc)

}

  





  exitButtonMars = createImg('./assets/Exit Button.png' )
  exitButtonMars.position(10,10)
   exitButtonMars.size(50,50)
  exitButtonMars.mouseClicked(exitGame)





}

function draw() {







  
 drawSprites(); 
 

}



function exitGame(){
gameState = 0
  if(gameState == 0){
  
    background(bgImg)
    exitButtonMars.hide()

    spaceShip2.position.x = 750
    spaceShip2.position.y = 300
  
  
  mars = createImg('./assets/Mars.png',"mars")
  mars.position(600,0)
  mars.size(250,250)
  mars.mouseClicked(marsFunc)
  

  
  }




O2.hide()
N2.hide()
Human.remove()
HumanButton.hide()

marsSpaceTentTab.hide()

marsTablet.remove()
marsSpaceTent.remove()
o2.remove()
n2.remove()

}








function marsFunc(){
  gameState = 1

  
  mars.hide()
  spaceShip.remove()
  spaceShip2.position.x = 10000
  spaceShip2.position.y = 100000
  exitButtonMars.show()

  if(gameState == 1){
      marsObject = new Mars()
      marsObject.play()
  }
}

function dragonFunc(){
gameState = 2

if(gameState == 2){
  spaceShip.remove()
  spaceShip2.position.x = 10000
  spaceShip2.position.y = 100000
  mars.hide()
  exitButtonMars.show()
  
  
}

}

