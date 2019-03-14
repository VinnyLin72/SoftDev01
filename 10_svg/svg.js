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

pic.addEventListener("click", function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var xc = e.offsetX;
    var yc = e.offsetY;
    c.setAttribute("cx", xc);
    c.setAttribute("cy", yc);
    c.setAttribute("r", "10");
    c.setAttribute("stroke", "black");
    c.setAttribute("fill", "red");
    pic.appendChild(c);

    c.addEventListener("click", function(e){
	e.stopPropagation()
	if (c.getAttribute("fill") == "red"){
	    c.setAttribute("fill", "green");
	}
	else{
	    new_x = Math.floor(Math.random() * 500)
	    new_y = Math.floor(Math.random() * 500)
	    c.setAttribute("fill", "red");
	    c.setAttribute("cx", new_x);
	    c.setAttribute("cy", new_y);
	}
    }
		      );
}
		    );


//pic.appendChild(c)
