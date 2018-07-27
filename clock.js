

var hourHand = document.getElementById("hourHand");
var minuteHand = document.getElementById("minuteHand");	
var secondHand = document.getElementById("secondHand");
//var secondHand = document.getElementById("secondHand");

function startClock() {
	var date = new Date();
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();   
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.1 * minute);//hours
	var minuteDeg = (minute * 6) + (0.05 + second);//minutes
	var secondDeg = second * 6;//seconds
//secondHand.style.transform = "rotate(" ask in class
// create function to transform degrees to rotation

// .style.transform(rotation)
	hourHand.style.transform = "rotate(" + hourDeg + "deg)";
	minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
	secondHand.style.transform = "rotate(" + secondDeg + "deg)";


	setInterval(startClock, 1000);
/*
setInterval(function(){
    console.log("TICK!"); need to know where this is supposed to be
 }, 1000);
*/

};

startClock();
