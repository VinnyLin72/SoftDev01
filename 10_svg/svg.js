var pic = document.getElementById("vimage")
var clear = document.getElementById("but_clear")
    
var last = {x: [], y: []};

clear.addEventListener("click", function(e){
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
	last = {x: [], y: []};
    }
}
		      );

var check_dot = function(x, y){
    for (i = 0; i < last.x.length; i ++){
	if (Math.pow(x - last.x[i], 2) + Math.pow(y - last.y[i], 2) < 100){
	    return false;
	}
    }
    return true
}

pic.addEventListener("click", function(e){
    var ch = pic.children;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var xc = e.offsetX;
    var yc = e.offsetY;
    if (check_dot(xc, yc)){
	c.setAttribute("cx", xc);
	c.setAttribute("cy", yc);
	c.setAttribute("r", "10");
	c.setAttribute("stroke", "black");
	c.setAttribute("fill", "red");
	pic.appendChild(c);
	last.x.push(xc);
	last.y.push(yc);
	c.addEventListener("click", function(e){
	if (c.getAttribute("fill") == "red"){
	    c.setAttribute("fill", "green");
	    last.x.push(new_x);
            last.y.push(new_y);
	}
	else{
	    new_x = Math.floor(Math.random() * 500)
	    new_y = Math.floor(Math.random() * 500)
	    c.setAttribute("fill", "red");
	    c.setAttribute("cx", new_x);
	    c.setAttribute("cy", new_y);
	    last.x.push(new_x);
	    last.y.push(new_y);
	}
    }
		      );
    }
}
		    );


//pic.appendChild(c)
