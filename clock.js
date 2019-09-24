// //Dom events

var date = new Date();
var dateHour = date.getHours();
var ts = 0;
var min = 0;
var calcHour = 60 * 60;
var clock = document.getElementsByTagName('img');

function moveSecondHand (){
    clock[1].style.transform = "rotate(" + ts + "deg)";
}

function moveMinuteHand() {
    clock[2].style.transform = "rotate(" + min + "deg)";
}

function moveHourHand() {
    hr = dateHour * 30;
    clock[3].style.transform = "rotate(" + hr + "deg)";
}

setInterval(function(){ moveSecondHand();ts = 3.1+ts },1000);

setInterval(function(){ moveMinuteHand();min = 6+min },60*1000);

setInterval(function(){ moveHourHand();hr = 30+hr },calcHour*1000);


