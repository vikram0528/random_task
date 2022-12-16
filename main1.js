const btn = document.getElementById("star");
const heading = document.getElementById("head");
star.addEventListener('click', fun);


/*function fun(){
	
var symbol = "0123456789ABCDEF";
	var color = "#";
	
	for(var i=0; i<6; i++){
		
		color = color + symbol[Math.floor(Math.random()*16)];
		
	}
	
	document.body.style.background = color; 
	
	heading.innerText = color;
	
	console.log(color); 
	
} */

function fun(){
	
	
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255) ;
	var b = Math.floor(Math.random()*255);
	var color;
	
		
	color = "rgb" + "( "+ r + " , " + g + " , " + b +" )";
		
	
	document.body.style.background = color;
	
	head.innerText = color;
	
	console.log(color)
	
}
 