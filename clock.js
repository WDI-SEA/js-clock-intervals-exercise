
// setInterval(setClock, 1000)

var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');
var secondHand = document.getElementById('second');

function tellTime() {

    var currentDate = new Date();
    var hoursTick = currentDate.getHours() % 12;
    var minutesTick = currentDate.getMinutes();
    var secondsTick = currentDate.getSeconds();
   
    var hourDeg = (hoursTick * 30) + (0.5 * minutesTick);
    var minuteDeg = (minutesTick * 6) + (0.1 * secondsTick);
    var secondDeg = (secondsTick * 6);

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

   setTimeout(tellTime, 1000);

};

tellTime();

