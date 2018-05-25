var secondRotation = function(num) {
	return (num / 60) * 360;
};

var hourRotation = function(num) {
	return (num / 12) * 360;
};

var rotate = function(secs, mins, hour){
	document.getElementById('second').style.transform = 'rotate(' + secs + 'deg)';
	document.getElementById('minute').style.transform = 'rotate(' + mins + 'deg)';
	document.getElementById('hour').style.transform = 'rotate(' + hour + 'deg)';
};

var time, seconds, minutes, hour;
var interval = setInterval(function(){
	time = Date.now();
	seconds = (time / 1000) % 60;
	minutes = (time / 60000) % 60;
	hour = (time / 720000) % 60 + 1;

	rotate(secondRotation(seconds), secondRotation(minutes), hourRotation(hour));
}, 1000);
