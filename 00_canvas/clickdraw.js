```
Vincent Lin
SoftDev2 pd08
K00 -- I See  Red Door...
2019-1-31
```

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clearbtn = document.getElementById("cc");
var togbtn = document.getElementById("tog");
var state = "rect";

c.addEventListener("click", function(e){
    var cvs = c.getBoundingClientRect();
    if (state == "rect"){
	ctx.fillRect(e.clientX - cvs.left - 10, e.clientY - cvs.top - 10, 20, 20);
    }
    else{
	ctx.beginPath();
	ctx.ellipse(e.clientX - cvs.left, e.clientY - cvs.top, 10, 10, Math.PI, 0, 2 * Math.PI);
	ctx.fill();
    }
});

clearbtn.addEventListener("click", function(e){
    ctx.clearRect(0, 0, c.height, c.width);
});

togbtn.addEventListener("click", function(e){
    if (state == "rect"){
	state = "dot";
	togbtn.innerHTML = "Dot";
    }
    else{
	state = "rect";
	togbtn.innerHTML = "Rectangle";
    }
});
