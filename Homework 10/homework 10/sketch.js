



var headX = 250;
var headY = 100;
var headDirection;

var bodyX = 200;
var bodyY = 180;
var bodyDirection;

var rarmX = 150;
var rarmY = 180;
var rarmDirection;

var larmX = 300;
var larmY = 180;
var larmDirection;

var eyeX = 225;
var eyeY = 80;
var eyeDirectionX = 2;
var eyeDirectionY = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;

var movement;

function setup()
            {
                createCanvas(500, 600);
                headDirection = floor(random() * 5) + 1;
                bodyDirection = floor(random() * 5) + 1;
                rarmDirection = floor(random() * 5) + 1;
                larmDirection = floor(random() * 5) + 1;
            }
            
            function draw()
            {
                background(120);
                console.log("draw"); 
                 fill(200, 120, 100);
                circle(headX,headY,175);
            headX+=headDirection;
            if(headX >= 418 || headX <= 82)
                 {
              headDirection *= -1;
             }
             
                
                fill(20,0,0)
                rect(bodyX,bodyY,100,150);
            bodyX+=bodyDirection;
            if(bodyX >= 418 || bodyX <= 0)
                 {
              bodyDirection *= -1;
             }
             //Arm 1//
              fill(20,0,0)
                rect(150,rarmY,50,120);
                 rarmY += rarmDirection;
                if(rarmY <= 0 || rarmY >= 480 )
                {
                  rarmDirection *= -1;
                 }

                // Arm 2
                fill(20,0,0)
                rect(300,rarmY,50,120);
                 rarmY += rarmDirection;
                if(rarmY <= 0 || rarmY >= 480 )
                {
                  rarmDirection *= -1;
                 }
              
              //legs and mouth
              fill(20,0,150)
                rect(200,330,40,120)
              fill(20,0,150)
                rect(260,330,40,120)
              fill(100,0,0)
              triangle(300, 135, 200, 130, 256, 185);
              //Eyeball 1
                 fill(255,255,255)
              circle(eyeX,eyeY,30)
              eyeX += eyeDirectionX;
              eyeY += eyeDirectionY;

                if (eyeX >= 485 || eyeX <= 15) {
                 eyeDirectionX *= -1;
                }
                if (eyeY >= 585 || eyeY <= 15) {
                 eyeDirectionY *= -1;

                    
                        }   
              
              // Eyeball 2
              fill(255,255,255)
              circle(275,80,30)
              //Eyeballs and hair
              fill(10,0,0)
              point(275, 70);
              fill(10,0,0)
              point(225, 70);
              fill(0,0,100)
              line(230, 10, 150, 75);
              fill(0,0,100)
              line(231, 10, 180, 75);
              fill(0,0,100)
              line(232, 10, 220, 75);
              fill(0,0,100)
              line(235, 10, 260, 75);
              fill(0,0,100)
              line(240, 10, 190, 75);
              fill(0,0,100)
              line(244, 10, 240, 75);
              fill(0,0,100)
              line(249, 10, 210, 75);
              fill(0,0,100)
              line(253, 10, 300, 75);
               
        fill(10);
        textSize(size);
        size+= sizeDirection;
        count++;
        if(count > 5)
         {
        sizeDirection *=-1;
        count = 0;
         }
        text("Bradley Birkholz",270,500 );
            } 