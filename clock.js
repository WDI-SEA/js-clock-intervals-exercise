//second hand should rotate 6 degrees every 1 second
//minute hand should rotate 6 degrees every 60 seconds
//hour hand should rotate 6 degrees every 3600 seconds


var secondHand = setTimeout(timerS, 1000);

function timerS() {
  document.getElementById("second").style.transform = "rotate(6deg)";
};

var minuteHand = setInterval(timerM, 6000);

function timerM() {
  document.getElementById("second").style.transform = "rotate(6deg)";
};

var hourHand = setInterval(timerH, 10000);

function timerH() {
  document.getElementById("second").style.transform = "rotate(6deg)";
};


//var degrees = 6;

//var el = document.getElementById("second");
//el.style.transform = "rotate(" + degrees + "deg)";


/*var secondRotation = function(sec) {
	return (sec/60) * 360;
};

var hourRotation = function(hour) {
	return (hour/12) *360;
};

*/