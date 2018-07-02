//define an object that describe a circle
var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color:[255,0,0],
    Xspeed: 10,
    Yspeed: 15
}

function setup() {
    createCanvas(640, 480);
    background(210, 255, 46);
    frameRate(15);
}

function draw() {
    fill(circle.color); 
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
   
   
    // if the xCoord of circle is greater than the length of the canvas, bounce back
    if(circle.xCoor > 640){
        circle.diameter = random (20, 80);
        circle.color = [0,0,0]; //color is black
        circle.Xspeed = -circle.Xspeed;
    } else if (circle.xCoor < 0){
        circle.Xspeed = -circle.Xspeed;
        circle.color = [random(0,255), random(0,255), random(0,255)];
    }
        
        circle.xCoor += circle.Xspeed;
    
     if(circle.yCoor > 480){
        circle.color = [0,0,0]; //color is black
        circle.Yspeed = -circle.Yspeed;
        circle.diameter = random(20, 80);
         circle.color = [random(0,255), random(0,255), random(0,255)];
    } else if (circle.yCoor < 0){
        circle.Yspeed = -circle.Yspeed;
        circle.color = [random(0,255), random(0,255), random(0,255)];
    }
        circle.yCoor += circle.Yspeed;
    
}
   