

var time = new Date();
var secondhand = time.getSeconds();
var minutehand = time.getMinutes();
var hourhand = time.getHours();
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var initialize = function(){
	hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
	minute.style.transform = "rotate(" + (minutehand * 6) + "deg)";
	second.style.transform = "rotate(" + (secondhand * 6) + "deg)";
	console.log("first", minutehand);
}

initialize();

setInterval(function () {
	hourhand += (30/3600);
	hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
}, 1000);

setInterval(function () {
	minutehand += (6/60);
	console.log(minutehand);
	minute.style.transform = "rotate(" + (minutehand * 6) + "deg)";
}, 1000);

setInterval(function () {
	secondhand += 6;
	second.style.transform = "rotate(" + (secondhand * 1) + "deg)";
}, 1000);


