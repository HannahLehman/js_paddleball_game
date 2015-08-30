
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Coordinates of initial ball placement.
var x = canvas.width/2;
var y = canvas.height-30;

// Coordinates to move ball.
var dx = 2;
var dy = -2;

var ballRadius = 10;

var hexColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

// Create a user-controlled paddle.
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
};

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
};

// draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = hexColor;
    ctx.fill();
    ctx.closePath();
};

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};


// redraw the ball in every frame
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(x + dx < ballRadius || x + dx > canvas.width-ballRadius) {
        dx = -dx;
    } 
    if(y + dy < ballRadius || y + dy > canvas.height-ballRadius) {
        dy = -dy; 
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
};

setInterval(draw, 10);

