const secondPointer = document.getElementById("second");
const minutePointer = document.getElementById("minute");
const hourPointer = document.getElementById("hour");

// let secondCounter
// let secondDegree


Function setTime() {
    const now = new Date ();



const seconds = new.getSeconds();
const secondsDegree = ((seconds / 60)  *360) +90;
secondsElement.style.transfrom = 'rotate(${secondsDegrees}deg';

const mins = now.getMinutes();
const secondsDegree = ((main / 60 ) * 360) + ((seconds/60)*6) + 90;
SVGAnimateMotionElement.style.teansfrom = 'rotate(${minDegrees}deg';



const hour = now.getHours();
console.log(hour)
const hourDegree = ((hour /12) *360) + ((mins/60)*30)+ 90;
console.log(hourDegree)
HTMLSourceElement.style.transfrom = 'rotate(${hourDegrees}deg';


}


setInterval(setTime, 1000);

setTime()
// const minutes = setInterval(minute, 1000*60)


// let hourCounter=0
// let hourDegree=0


