//define an object that describe a circle
/*var circle = {
    diameter: 80,
    xCoor: 0,
    yCoor: 0,
    color:[255,0,0], //RGB values give circle a red color
    Xspeed: 10,
    Yspeed: 15
}
*/

function Ball(x, y, diameter, color, xSpeed, ySpeed){
    //this is a keyword that refers to the individual object
    this.xCoor = x;
    this.yCoor = y; 
    this.diameter = diameter; 
    this.color = color || [0,0,0]; //||[o,o,o] makes the default color black
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}

var ballList = [];



function setup() {
    createCanvas(parseInt(prompt("Input a number for the width of the canvas.")), parseInt(prompt("Input a number for the height of the canvas.")));
    var numCircle = random([2,5,10,16]);
    for(var i = 0; i < numCircle; i++) {
        ballList[i] = new Ball(random(0, width), random(0, height), 20);
    }
}

function draw() {
    background(210, 135, 146);
    for(var i = 0; i < ballList.length; i++){
        fill(ballList[i].color); 
        ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
         //if the xCoord of circle is greater than the length of the canvas, bounce back
        if(ballList[i].xCoor > width || ballList[i].xCoor < 0){
            ballList[i].color = [random(0,255), random(0,255), random(0,255)];
            ballList[i].xSpeed = -ballList[i].xSpeed;

        

        } else if(ballList[i].yCoor > height || ballList[i].yCoor < 0){
            ballList[i].ySpeed = -ballList[i].ySpeed;
            ballList[i].diameter = random(20, 80);
        }
        ballList[i].xCoor += ballList[i].xSpeed;
        ballList[i].yCoor += ballList[i].ySpeed;
    }
}