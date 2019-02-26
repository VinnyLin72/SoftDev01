//Team Unique Rabbit - Vincent Lin, Daniel Keriazis
//Softdev2 pd8
//K03 -- They lock us in the tower whenever we get caught
//2019-2-4

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var growing = true;
var requestID;
var radius = 0;
//ctx.fillStyle = "#00ffff";

var clear = () =>{
    console.log("clear:", requestID);
    ctx.clearRect(0, 0, c.width, c.height);
};

var drawDot = () =>{
    window.cancelAnimationFrame(requestID);
    clear();
    // draw dot
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    if (growing){
	radius ++;
    }
    else{
	radius --;
    }
    if (radius >= c.width/2){
	growing = false;
    }
    else if(radius == 0){
	growing = true;
    }
    requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = () =>{
    console.log("stopIt:" , requestID);
    window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
