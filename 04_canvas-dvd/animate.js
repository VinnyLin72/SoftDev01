//Team Unique Rabbit - Vincent Lin, Daniel Keriazis
//Softdev2 pd8
//K04 -- What is it saving the screen from?
//2019-2-6

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");
var growing = true;
var requestID;
var radius = 0;
ctx.fillStyle = "#00ffff";

//ctx.drawImage(logo, 0 ,0);

var dvdLogoSetup = () =>{    
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random() * (c.height - rectHeight));

    var xVel = 1;
    var yVel = 1;
    
    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var drawDvd = () =>{
	clear();
	ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

	//physics
	if (rectX + rectWidth >= c.width || rectX <= 0){
	    xVel *= -1;
	}
	if (rectY + rectHeight >= c.height || rectY <= 0){
	    yVel *= -1;
	}
	rectX += xVel;
	rectY += yVel;
	
	requestID = window.requestAnimationFrame(drawDvd);
    };
    drawDvd();
};

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
dvdButton.addEventListener("click", dvdLogoSetup);
