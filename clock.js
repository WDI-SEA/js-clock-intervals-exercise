//Global variables
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');
var secondTick = 0;
var minuteTick = 0;
var hourTick = 0;


//create initial clock setup on page load
//function initialTime () 
var secondHand = setInterval(function(){
    secondTick += 1.5;
    seconds.style.transform = "rotate(" + secondTick + "deg)";
}, 2.5);

var minuteHand = setInterval(function(){
    minuteTick += 0.25;
    minutes.style.transform = "rotate(" + minuteTick + "deg)";
}, 25);

var hourHand = setInterval(function(){
    hourTick += 0.25;
    hours.style.transform = "rotate(" + hourTick + "deg)";
}, 300);

//current time

/*var now = new Date();

minutes = now.getMinutes();
seconds = now.getSeconds(); */






//setInterval(seconds, 1000); 