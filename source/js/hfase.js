// animation globals
var t=0; 
var frameInterval = 25; // in ms
var canvas = null; // canvas DOM object
var context = null; // canvas context
// ball globals
var ballRadius = 10;
// physics globals
var collisionDamper = 0.35;
var floorFriction = 0.0039 * frameInterval;
var mouseForceMultiplier = 0.75 * frameInterval;
var restoreForce =0.0048 * frameInterval;
var mouseX = 99999;
var mouseY = 99999;
var balls = null;
function Ball(x,y,vx,vy,color) {
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.color=color;
    this.origX = x;
    this.origY = y;
}
function init() {
    canvas=document.getElementById("myCanvas");
    context=canvas.getContext("2d");
    initStageObjects(); 
    setInterval(updateStage, frameInterval);
}
function updateStage() {
    t+=frameInterval; 
    clearCanvas();
    updateStageObjects();
    drawStageObjects(); 
}
function initStageObjects() {
    balls = new Array(); 
    var green = "#3A5BCD";
    var black = "#000000";
    var red = "#FF0000";
    balls.push(new Ball(20,20,0,0,black));
    balls.push(new Ball(20,25,0,0,black));
    balls.push(new Ball(20,30,0,0,black));
    balls.push(new Ball(20,35,0,0,black));
    balls.push(new Ball(20,40,0,0,black));
    balls.push(new Ball(20,45,0,0,black));
    balls.push(new Ball(20,50,0,0,black));
    balls.push(new Ball(20,55,0,0,black));
    balls.push(new Ball(20,60,0,0,black));
    balls.push(new Ball(20,65,0,0,black));
    balls.push(new Ball(20,70,0,0,black));
    balls.push(new Ball(20,75,0,0,black));
    balls.push(new Ball(20,80,0,0,black));
    balls.push(new Ball(20,85,0,0,black));
    balls.push(new Ball(20,90,0,0,black));
    balls.push(new Ball(20,95,0,0,black));
    balls.push(new Ball(20,100,0,0,black));
    balls.push(new Ball(20,105,0,0,black));
    balls.push(new Ball(20,110,0,0,black));
    balls.push(new Ball(20,115,0,0,black));
    balls.push(new Ball(20,120,0,0,black));
    balls.push(new Ball(20,125,0,0,black));
    balls.push(new Ball(20,130,0,0,black));
    balls.push(new Ball(20,135,0,0,black));
    balls.push(new Ball(20,140,0,0,black));
    balls.push(new Ball(20,145,0,0,black));
    balls.push(new Ball(20,150,0,0,black));
    balls.push(new Ball(20,155,0,0,black));
    
    
    balls.push(new Ball(70,20,0,0,black));
    balls.push(new Ball(70,25,0,0,black));
    balls.push(new Ball(70,30,0,0,black));
    balls.push(new Ball(70,35,0,0,black));
    balls.push(new Ball(70,40,0,0,black));
    balls.push(new Ball(70,45,0,0,black));
    balls.push(new Ball(70,50,0,0,black));
    balls.push(new Ball(70,55,0,0,black));
    balls.push(new Ball(70,60,0,0,black));
    balls.push(new Ball(70,65,0,0,black));
    balls.push(new Ball(70,70,0,0,black));
    balls.push(new Ball(70,75,0,0,black));
    balls.push(new Ball(70,80,0,0,black));
    balls.push(new Ball(70,85,0,0,black));
    balls.push(new Ball(70,90,0,0,black));
    balls.push(new Ball(70,95,0,0,black));
    balls.push(new Ball(70,100,0,0,black));
    balls.push(new Ball(70,105,0,0,black));
    balls.push(new Ball(70,110,0,0,black));
    balls.push(new Ball(70,115,0,0,black));
    balls.push(new Ball(70,120,0,0,black));
    balls.push(new Ball(70,125,0,0,black));
    balls.push(new Ball(70,130,0,0,black));
    balls.push(new Ball(70,135,0,0,black));
    balls.push(new Ball(70,140,0,0,black));
    balls.push(new Ball(70,145,0,0,black));
    balls.push(new Ball(70,150,0,0,black));
    balls.push(new Ball(70,155,0,0,black));
    
    
    balls.push(new Ball(20,100,0,0,black));
    balls.push(new Ball(25,100,0,0,black));
    balls.push(new Ball(30,100,0,0,black));
    balls.push(new Ball(35,100,0,0,black));
    balls.push(new Ball(40,100,0,0,black));
    balls.push(new Ball(45,100,0,0,black));
    balls.push(new Ball(50,100,0,0,black));
    balls.push(new Ball(55,100,0,0,black));
    balls.push(new Ball(60,100,0,0,black));
    balls.push(new Ball(65,100,0,0,black));
    balls.push(new Ball(70,100,0,0,black));
    balls.push(new Ball(75,100,0,0,black));
    balls.push(new Ball(80,100,0,0,black));
    balls.push(new Ball(85,100,0,0,black));
    balls.push(new Ball(90,100,0,0,black));
    balls.push(new Ball(95,100,0,0,black));
    balls.push(new Ball(100,100,0,0,black));
    balls.push(new Ball(105,100,0,0,black));
    balls.push(new Ball(110,100,0,0,black));
    balls.push(new Ball(115,100,0,0,black));
    balls.push(new Ball(122,100,0,0,red));
    
    balls.push(new Ball(70,20,0,0,black));
    balls.push(new Ball(75,20,0,0,black));
    balls.push(new Ball(80,20,0,0,black));
    balls.push(new Ball(85,20,0,0,black));
    balls.push(new Ball(90,20,0,0,black));
    balls.push(new Ball(95,20,0,0,black));
    balls.push(new Ball(100,20,0,0,black));
    balls.push(new Ball(105,20,0,0,black));
    balls.push(new Ball(110,20,0,0,black));
    balls.push(new Ball(115,20,0,0,black));
    balls.push(new Ball(120,20,0,0,black));
    balls.push(new Ball(125,20,0,0,black));
    balls.push(new Ball(130,20,0,0,black));
    balls.push(new Ball(135,20,0,0,black));
    
    
    balls.push(new Ball(100,60,0,0,black));
    balls.push(new Ball(100,65,0,0,green));
    balls.push(new Ball(100,70,0,0,green));
    balls.push(new Ball(100,75,0,0,green));
    balls.push(new Ball(100,80,0,0,green));
    balls.push(new Ball(100,85,0,0,green));
    balls.push(new Ball(100,90,0,0,green));
    balls.push(new Ball(100,95,0,0,green));
    balls.push(new Ball(100,100,0,0,green));
    balls.push(new Ball(100,105,0,0,green));
    balls.push(new Ball(100,110,0,0,green));
    balls.push(new Ball(100,115,0,0,green));
    balls.push(new Ball(100,120,0,0,green));
    balls.push(new Ball(100,125,0,0,green));
    balls.push(new Ball(100,130,0,0,green));
    balls.push(new Ball(100,135,0,0,green));
    balls.push(new Ball(100,140,0,0,green));
    balls.push(new Ball(100,145,0,0,green));
    balls.push(new Ball(100,150,0,0,green));
    balls.push(new Ball(100,155,0,0,green));
    balls.push(new Ball(100,60,0,0,green));
    
    
    balls.push(new Ball(105,60,0,0,green));
    balls.push(new Ball(110,60,0,0,green));
    balls.push(new Ball(115,60,0,0,green));
    balls.push(new Ball(120,60,0,0,green));
    balls.push(new Ball(125,60,0,0,green));
    balls.push(new Ball(130,60,0,0,green));
    balls.push(new Ball(135,60,0,0,green));
    balls.push(new Ball(140,60,0,0,green));
    
    
    balls.push(new Ball(145,60,0,0,green));
    balls.push(new Ball(145,65,0,0,green));
    balls.push(new Ball(145,70,0,0,green));
    balls.push(new Ball(145,75,0,0,green));
    balls.push(new Ball(145,80,0,0,green));
    balls.push(new Ball(145,85,0,0,green));
    balls.push(new Ball(145,90,0,0,green));
    balls.push(new Ball(145,95,0,0,green));
    balls.push(new Ball(145,100,0,0,green));
    balls.push(new Ball(145,105,0,0,green));
    balls.push(new Ball(145,110,0,0,green));
    balls.push(new Ball(145,115,0,0,green));
    balls.push(new Ball(145,120,0,0,green));
    balls.push(new Ball(145,125,0,0,green));
    balls.push(new Ball(145,130,0,0,green));
    balls.push(new Ball(145,135,0,0,green));
    balls.push(new Ball(145,140,0,0,green));
    balls.push(new Ball(145,145,0,0,green));
    balls.push(new Ball(145,150,0,0,green));
    balls.push(new Ball(145,155,0,0,green));
    
    
    balls.push(new Ball(175,60,0,0,green));
    balls.push(new Ball(180,60,0,0,green));
    balls.push(new Ball(185,60,0,0,green));
    balls.push(new Ball(190,60,0,0,green));
    balls.push(new Ball(195,60,0,0,green));
    balls.push(new Ball(200,60,0,0,green));
    balls.push(new Ball(205,60,0,0,green));
    balls.push(new Ball(210,60,0,0,green));
    
    
    balls.push(new Ball(175,60,0,0,green));
    balls.push(new Ball(175,65,0,0,green));
    balls.push(new Ball(175,70,0,0,green));
    balls.push(new Ball(175,75,0,0,green));
    balls.push(new Ball(175,80,0,0,green));
    balls.push(new Ball(175,85,0,0,green));
    balls.push(new Ball(175,90,0,0,green));
    balls.push(new Ball(175,95,0,0,green));
    balls.push(new Ball(175,100,0,0,green));
    balls.push(new Ball(175,105,0,0,green));
    
    
    balls.push(new Ball(180,105,0,0,green));
    balls.push(new Ball(185,105,0,0,green));
    balls.push(new Ball(190,105,0,0,green));
    balls.push(new Ball(195,105,0,0,green));
    balls.push(new Ball(200,105,0,0,green));
    balls.push(new Ball(205,105,0,0,green));
    
    
    balls.push(new Ball(210,105,0,0,green));
    balls.push(new Ball(210,110,0,0,green));
    balls.push(new Ball(210,115,0,0,green));
    balls.push(new Ball(210,120,0,0,green));
    balls.push(new Ball(210,125,0,0,green));
    balls.push(new Ball(210,130,0,0,green));
    balls.push(new Ball(210,135,0,0,green));
    balls.push(new Ball(210,140,0,0,green));
    balls.push(new Ball(210,145,0,0,green));
    balls.push(new Ball(210,150,0,0,green));
    balls.push(new Ball(210,155,0,0,green));
    balls.push(new Ball(210,155,0,0,green));
    
    
    balls.push(new Ball(175,155,0,0,green));
    balls.push(new Ball(180,155,0,0,green));
    balls.push(new Ball(185,155,0,0,green));
    balls.push(new Ball(190,155,0,0,green));
    balls.push(new Ball(195,155,0,0,green));
    balls.push(new Ball(200,155,0,0,green));
    balls.push(new Ball(205,155,0,0,green));
    balls.push(new Ball(210,155,0,0,green));
    
    
    balls.push(new Ball(240,60,0,0,green));
    balls.push(new Ball(245,60,0,0,green));
    balls.push(new Ball(250,60,0,0,green));
    balls.push(new Ball(255,60,0,0,green));
    balls.push(new Ball(260,60,0,0,green));
    balls.push(new Ball(265,60,0,0,green));
    balls.push(new Ball(270,60,0,0,green));
    balls.push(new Ball(275,60,0,0,green));
    
    
    balls.push(new Ball(240,65,0,0,green));
    balls.push(new Ball(240,70,0,0,green));
    balls.push(new Ball(240,75,0,0,green));
    balls.push(new Ball(240,80,0,0,green));
    balls.push(new Ball(240,85,0,0,green));
    balls.push(new Ball(240,90,0,0,green));
    balls.push(new Ball(240,95,0,0,green));
    balls.push(new Ball(240,100,0,0,green));
    balls.push(new Ball(240,105,0,0,green));
    balls.push(new Ball(240,110,0,0,green));
    balls.push(new Ball(240,115,0,0,green));
    balls.push(new Ball(240,120,0,0,green));
    balls.push(new Ball(240,125,0,0,green));
    balls.push(new Ball(240,130,0,0,green));
    balls.push(new Ball(240,135,0,0,green));
    balls.push(new Ball(240,140,0,0,green));
    balls.push(new Ball(240,145,0,0,green));
    balls.push(new Ball(240,150,0,0,green));
    balls.push(new Ball(240,155,0,0,green));
    
    
    balls.push(new Ball(240,100,0,0,green));
    balls.push(new Ball(245,100,0,0,green));
    balls.push(new Ball(250,100,0,0,green));
    balls.push(new Ball(255,100,0,0,green));
    balls.push(new Ball(260,100,0,0,green));
    balls.push(new Ball(265,100,0,0,green));
    balls.push(new Ball(270,100,0,0,green));
    balls.push(new Ball(275,100,0,0,green));
    
    
    balls.push(new Ball(240,155,0,0,green));
    balls.push(new Ball(245,155,0,0,green));
    balls.push(new Ball(250,155,0,0,green));
    balls.push(new Ball(255,155,0,0,green));
    balls.push(new Ball(260,155,0,0,green));
    balls.push(new Ball(265,155,0,0,green));
    balls.push(new Ball(270,155,0,0,green));
    balls.push(new Ball(275,155,0,0,green));
}
function drawStageObjects() {
    for (var n=0; n<balls.length; n++) {
        context.beginPath();
        context.arc(balls[n].x,balls[n].y,ballRadius,
            0,2*Math.PI,false);
        context.fillStyle=balls[n].color;
        context.fill();20
    }
}
function updateStageObjects() {

    for (var n=0; n<balls.length; n++) {

        // set ball position based on velocity
        balls[n].y+=balls[n].vy;
        balls[n].x+=balls[n].vx; 
        // restore forces 
        if (balls[n].x > balls[n].origX) {
            balls[n].vx -= restoreForce;
        }
        else {
            balls[n].vx += restoreForce;
        }
        if (balls[n].y > balls[n].origY) {
            balls[n].vy -= restoreForce;
        }
        else {
            balls[n].vy += restoreForce;
        }
        // mouse forces
        var distX = balls[n].x - mouseX;
        var distY = balls[n].y - mouseY;

        var radius = Math.sqrt(Math.pow(distX,2) + 
            Math.pow(distY,2));
 
        var totalDist = Math.abs(distX) + Math.abs(distY);
 
        var forceX = (Math.abs(distX) / totalDist) * 
            (1/radius) * mouseForceMultiplier;
        var forceY = (Math.abs(distY) / totalDist) * 
            (1/radius) * mouseForceMultiplier;
 
        if (distX>0) { // mouse is left of ball
            balls[n].vx += forceX;
        }
        else {
            balls[n].vx -= forceX;
        }
        if (distY>0) { // mouse is on top of ball
            balls[n].vy += forceY;
        }
        else {
            balls[n].vy -= forceY;
        }
        // floor friction
        if (balls[n].vx>0) {
            balls[n].vx-=floorFriction;
        }
        else if (balls[n].vx<0) {
            balls[n].vx+=floorFriction;
        }
        if (balls[n].vy>0) {
            balls[n].vy-=floorFriction;
        }
        else if (balls[n].vy<0) {
            balls[n].vy+=floorFriction;
        }
        // floor condition
        if (balls[n].y > (canvas.height-ballRadius)) {
            balls[n].y=canvas.height-ballRadius-2;
            balls[n].vy*=-1; 
            balls[n].vy*=(1-collisionDamper);
        }
        // ceiling condition
        if (balls[n].y < (ballRadius)) {
            balls[n].y=ballRadius+2;
            balls[n].vy*=-1; 
            balls[n].vy*=(1-collisionDamper);
        }
        // right wall condition
        if (balls[n].x > (canvas.width-ballRadius)) {
            balls[n].x=canvas.width-ballRadius-2;
            balls[n].vx*=-1;
            balls[n].vx*=(1-collisionDamper);
        }
        // left wall condition
        if (balls[n].x < (ballRadius)) {
            balls[n].x=ballRadius+2;
            balls[n].vx*=-1;
            balls[n].vx*=(1-collisionDamper);
        }
    }
}
function clearCanvas() {
    context.clearRect(0,0,canvas.width, canvas.height);
}
function handleMouseMove(evt) {
    mouseX = evt.clientX - canvas.offsetLeft;
    mouseY = evt.clientY - canvas.offsetTop;
}
function handleMouseOut() {
    mouseX = 99999;
    mouseY = 99999;
}