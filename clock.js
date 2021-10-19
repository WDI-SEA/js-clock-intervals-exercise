let minDeg = 0;
let hrDeg = 0;
let secDeg = 0;

const secondHand = document.getElementById("second");
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute")

const clock = () => {



// let today = new Date();
// today.setHours(0, 0, 0, 0)
// let today = new Date();
// console.log(0/60)
// let minDeg = today.getMinutes();
// let hrDeg = today.getHours();
// let secDeg = today.getSeconds();

    secDeg += 6;
const secDegree = (a) => {
    secondHand.style.transform = "rotate(" + secDeg + "deg)";
    return secDeg
}

console.log(secDegree(secDeg))

    hrDeg += 0.0083;
const hourDegree = (a) => {
    hourHand.style.transform = "rotate(" + hrDeg + "deg)";
    return hrDeg
}

console.log(hourDegree(hrDeg))

    minDeg += 0.1;
const minuteDegree = (a) => {
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
    return minDeg
}

console.log(minuteDegree(minDeg))
}

setInterval(clock, 1000)



