var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("but");

body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
css.textContent = body.style.background + ";";

color1.addEventListener("input" , sample);
color2.addEventListener("input" , sample);
button.addEventListener("click" , setRandomColor);

function sample()
{
	body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setRandomColor()
{
	color1.value = randomColor();
	color2.value = randomColor();
	sample();
}

function randomColor()
{
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}
