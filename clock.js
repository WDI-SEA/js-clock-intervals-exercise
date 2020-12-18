var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var secondHand = document.getElementById('second');

function windClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hour = (hr * 360 / 12);
    let minute = (min * 360 / 60);
    let second = (sec * 360 / 60);

    function rotateSecond() {
        secondHand.style.transform = "rotate(" + second + "deg)";
    }
    rotateSecond();

    function rotateMinute() {
        minuteHand.style.transform = "rotate(" + minute + "deg)";
    }
    rotateMinute();
    function rotateHour() {
        hourHand.style.transform = "rotate(" + hour + "deg)";
    }
    rotateHour();
}

var interval = setInterval(windClock, 1000);
