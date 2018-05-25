
var time = new Date();
var sechand = time.getSeconds();
var minhand = time.getMinutes();
var hrhand = time.getHours();
var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hr = document.getElementById("hour");

var init = function(){
	sec.style.transform = "rotate(" + (sechand*6) + "deg)";
	min.style.transform = "rotate(" + (minhand*6) + "deg)";
	hr.style.transform = "rotate(" + (hrhand*30) + "deg)";
}


init();


setInterval(function(){
sechand += 1;
sec.style.transform = "rotate(" + (sechand*6) + "deg)";
}, 1000);



setInterval(function(){
minhand += (6/60);
min.style.transform = "rotate(" + (minhand * (6/60)) + "deg)";
}, 1000);




setInterval(function(){
hrhand += (.5/60);
hr.style.transform = "rotate(" + (hrhand *(.5/60)) + "deg)";
}, 1000);






