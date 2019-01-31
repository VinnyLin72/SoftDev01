// Communist Party of China -- Vincent Lin, Jack Lu
// SoftDev2 pd8
// K01 -- ...and I want to Paint It Better
// 2019-01-31

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var shape = 0;

// draw at location
var draw = document.getElementById("slate");
draw.addEventListener('click', function(e){
    // prevents default event from happening when event triggered
    e.preventDefault();
    // e.offsetX and e.offsetY provides offset X and Y coors between mouse pointer
    // and padding edge of target node
    var x = e.offsetX;
    var y = e.offsetY;
    // rect
    if (shape == 0){
        ctx.fillRect( x, y, 50, 50 );
    } 
    // dot
    else {
        // ctx.beginPath() starts new path by emptying list of subpaths
        ctx.beginPath();
        ctx.ellipse(x, y, 25, 25, 0, 0, 7);
        ctx.fill();

    }
});

// clear button
var clear = document.getElementById("b");
clear.addEventListener('click', function(){
    ctx.clearRect(0,0,600,600);
});

// toggle
var tog = document.getElementById("toggle");
tog.addEventListener('click', function(){
    if (shape == 1)
        shape = 0;
    else
        shape = 1;
});
