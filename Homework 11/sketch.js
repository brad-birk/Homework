var heroX = 100;
var heroY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var eyeX = 225;
var eyeY = 80;
var eyeDirectionX = 2;
var eyeDirectionY = 2;

var ballX = 40;
var ballY = 40;
var ballXSpeed;
var ballYSpeed;


var mouseShapeX = 0;
var mouseShapeY = 0;

function setup()
{
    createCanvas(500, 600);
    ballXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ballYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    createhero(200, 350);
}

function draw()
{
    background(0, 255, 178);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(20);
    
    text("EXIT", width-60, height-50);

    drawhero();
   heroMovement();

    fill(13, 145, 14);
    circle(ballX, ballY, 10);
ballXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
ballYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   ballX += ballXSpeed;
   ballY += ballYSpeed;
    
     
fill(255,255,255)
circle(eyeX,eyeY,32)
eyeX += eyeDirectionX;
eyeY += eyeDirectionY;

if (eyeX >= 485 || eyeX <= 18) {
        eyeDirectionX *= -1;
                }
     if (eyeY >= 535 || eyeY <= 18) {
     eyeDirectionY *= -1;

                    
                        }   
    fill(255, 255, 255);
    circle(ballX, ballY, 30);
    ballX += ballXSpeed;
   ballY += ballYSpeed;
        if(ballX > width)
        {
        ballX = 0;
         }
         else if(ballX < 0)
        {
        ballX = width;
         }
         if(ballY > height)
        {
        ballY = 0;
         }
         else if(ballY < 0)
        {
        ballY = height;
         }
        
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);

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