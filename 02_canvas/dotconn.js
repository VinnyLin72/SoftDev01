// Communist Party of China -- Vincent Lin, Jack Lu
// SoftDev2 pd8
// K02 -- Connecting the Dots
// 2019-02-01

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var oldx;
var oldy;

// draw at location
var draw = document.getElementById("playground");
draw.addEventListener('click', function(e){
    // prevents default event from happening when event triggered
    //e.preventDefault();
    // e.offsetX and e.offsetY provides offset X and Y coors between mouse pointer
    // and padding edge of target node

    var x = e.offsetX;
    var y = e.offsetY;
    drawSeg(x, y, oldx, oldy);
    oldx = x;
    oldy = y;
});

function drawSeg(x, y, oldx, oldy){
    // ctx.beginPath() starts new path by emptying list of subpaths

    ctx.beginPath();
    ctx.moveTo(oldx, oldy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    //ctx.ellipse(x, y, 10, 10, 0, 0, 7);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

// clear button
var clear = document.getElementById("clear");
clear.addEventListener('click', function(){
    ctx.clearRect(0,0,600,600);
});
