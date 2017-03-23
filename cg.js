
var numm=6;
var colors=genrancol(numm);
var squares= document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var resetbtn=document.getElementById("reset");
var easybtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");




easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numm=3;
    	colors=genrancol(numm);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{

    if(colors[i])
    {
    	squares[i].style.background=colors[i];
    }else
    {
    	squares[i].style.display="none";
    }

}



})

hardbtn.addEventListener("click",function(){
	numm=6;
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");

    colors=genrancol(numm);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

squares[i].style.display="block";

}







})




resetbtn.addEventListener("click",function()
{
	document.getElementById("msg").textContent="";
    document.getElementById("head").style.backgroundColor="#4682b4";
resetbtn.textContent="New Colors";
	colors=genrancol(numm);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];



}
})


colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function() {
		

		var clickedcolor=this.style.background;
        
		if (clickedcolor === pickedcolor) {
			resetbtn.textContent="PLAY AGAIN";
			
		    document.getElementById("head").style.backgroundColor=clickedcolor;
           document.getElementById("msg").textContent="Correct!";
           changecolors(clickedcolor);
		}
		else
        {
        	this.style.background="#232323";
        	this.classList.remove("square:hover");
        	document.getElementById("msg").textContent="Try Again";
		}
        
		// bod

	});
}
function changecolors(color)
{
  for (var i = 0; i <colors.length; i ++) {
  	squares[i].style.background=color;
  
  }

}

function pickcolor()

{
  var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function genrancol(num)
{
	var arr=[]


	for (var i = 0; i < num; i++) {

      arr.push(rancol());
		}
	return arr;

}
function rancol()
{

var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}

