
// setInterval(setClock, 1000)

const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function tellTime() {

    const currentDate = new Date();
    const hoursTick = currentDate.getHours() % 12;
    const minutesTick = currentDate.getMinutes();
    const secondsTick = currentDate.getSeconds();
   
    const hourDeg = (hoursTick * 30) + (0.5 * minutesTick);
    const minuteDeg = (minutesTick * 6) + (0.1 * secondsTick);
    const secondDeg = (secondsTick * 6);

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

   setInterval(tellTime, 1000);

};

tellTime();

