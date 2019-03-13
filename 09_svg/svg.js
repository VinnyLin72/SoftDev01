var pic = document.getElementById("vimage")
var clear = document.getElementById("but_clear")
    
var last = null;

clear.addEventListener("click", function(e){
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
	last = null;
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
    if(last){
	l.setAttribute("x1", last.x);
	l.setAttribute("y1", last.y);
	l.setAttribute("x2", xc);
	l.setAttribute("y2", yc);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
    }
    last = {x: xc, y: yc};
}
		    );


//pic.appendChild(c)
