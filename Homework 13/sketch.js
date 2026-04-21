var heroX = 100;
var heroY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var obsX = [];
var obsY = [];
var obspeedX = [];
var obspeedY = [];
var obSize = [];
var obR = [];
var obG = [];
var obB = [];

var mouseShapeX = 0;
var mouseShapeY = 0;

function setup()
{
    createCanvas(500, 600);
    for(var i = 0; i<5; i++)
    {
      obsX[i] = Math.floor(Math.random() * 500);
            obsY[i] = Math.floor(Math.random() * 600);

    obspeedX[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obspeedY[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obSize[i] = Math.floor(Math.random() *40)+10;
  obR[i] = Math.floor(Math.random() * 255);
  obG[i] = Math.floor(Math.random() * 255);
  obB[i] = Math.floor(Math.random() * 255);
    }
    createhero(200, 350);
}

function draw()
{
   mybackground();
  stroke(0);
  fill(0);
  createBorders(10);
  generateExit();
  drawhero();
   heroMovement();
  createTwoObs()
ifplayerexits()
  TwoObsMovement()
    

  
}
  function mybackground()
{
    background(0, 255, 178);
    stroke(0);
    fill(0);

    
}
  function generateExit(){
    textSize(20);
    
    text("EXIT", width-60, height-50);

  
}
function createTwoObs()
  {
    for(var i= 0; i <obsX.length; i++)
    {
      fill(obR[i], obG[i], obB[i]);
      circle(obsX[i],obsY[i], obSize[i]);
    }
    
     
fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
  }
function TwoObsMovement(){
for(var i = 0; i <obsX.length; i++)
{
obsX[i] += obspeedX[i];
obsY[i] += obspeedY[i];


    if(obsX[i] > width)
    {
        obsX[i] = 0;
    }
    else if(obsX[i] < 0)
    {
         obsX[i]= width;
    }
    if(obsY[i] > height)
    {
        obsY[i]= 0;
    }
    else if(obsY[i] < 0)
    {
        obsY[i]= height;
    }
  }
    
  
  }
function ifplayerexits()
  {
    if(heroX > width && heroY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Escaped!", width/2-50, height/2-50);
    }
  }
function heroMovement()
{
    if(keyIsDown(w))
    {
       heroY -= 10;
    }
    if(keyIsDown(s))
    {
      heroY += 10;
    }
    if(keyIsDown(a))
    {
       heroX -= 10;
        console.log("movement: " + heroX);
    }
    if(keyIsDown(d))
    {
       heroX += 10;
    }
}

function createhero(x, y)
{
 heroX = x;
   heroY = y;
    console.log(heroX);
}

    function drawhero()
      {
    fill(23, 40, 123);
    circle(heroX, heroY, 25);
      }

function createBorders(thickness)
      {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height-thickness, width, thickness);
    rect(width-thickness, 0, thickness, height-50);
    }

function mouseClicked()
      {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    }