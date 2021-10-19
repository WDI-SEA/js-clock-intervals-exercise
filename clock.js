const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

const time = () => {
    let hour = time.tellHour();
    let minute = time.tellMinute();
    let sec = time.tellSec();
}

const hourTick = hour*360/12 + ((minute * 360/60) / 12);
const minuteTick = (minute * 360/60) + (sec* 360/60)/60;
const secTick = sec * 360/60;

hourHand.style.transform = "rotate(" + hourTick + "deg)";
minuteHand.style.transform = "rotate (" + minuteTick + "deg)";
secondHand.style.transform = "rotate (" + minuteTick + "deg)";