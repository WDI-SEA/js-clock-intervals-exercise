// Date/Time upon loading the page
dateTime = new Date();
var seconds = dateTime.getSeconds();
var minutes = dateTime.getMinutes();
var hours = dateTime.getHours();

// DOM References
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');

// Time conversion to clockhand degrees
var secondDeg = (seconds * 1) * 6;
var minuteDeg = (minutes * 60) * 0.1 + (seconds * 0.1);
var hourDeg = (hours * 3600) * 0.00833333 + ((minutes * 60) * 0.00833333); 

// Function for clockhand movement (seconds = 6deg/second, minutes = 0.1deg/s, hours = 0.0083deg/s)
document.addEventListener("DOMContentLoaded", function() {
	var rotate = function () {
		secondDeg += 6;
		minuteDeg += 0.1;
		hourDeg += 0.00833333;
		secondHand.style.transform = "rotate(" + secondDeg + "deg)";
		minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
		hourHand.style.transform = "rotate(" + hourDeg + "deg)";
	};
	var intervalHandle = setInterval(rotate, 1000);
});