//worked with Kyle on this code

var secondPosition = 6;

var secondHand = setInterval(timerS, 1000);

function timerS() {
  document.getElementById("second").style.transform = "rotate("+ secondPosition + "deg)";
  secondPosition += 6; 
  console.log("this is working");
};

var minutePosition = 6;

var minuteHand = setInterval(timerM, 60000);

function timerM() {
	document.getElementById("minute").style.transform = "rotate("+ minutePosition + "deg)";
    minutePosition += 6; 
}

var hourPosition = 6;

var hourHand = setInterval(timerH, 360000);

function timerH() {
	document.getElementById("hour").style.transform = "rotate("+ hourPosition + "deg)";
    hourPosition += 6; 
}
