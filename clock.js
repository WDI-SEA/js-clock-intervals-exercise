let degrees = 0;

let hourHand = document.getElementById("hour");
hourHand.style.transform = "rotate(" + degrees + "deg)";

let minuteHand = document.getElementById("minute");
minuteHand.style.transform = "rotate(" + degrees + "deg)";

let secHand = document.getElementById("second");
minuteHand.style.transform = "rotate(" + degrees + "deg)";


const hourHandRotation = (arg) => {
    return (arg / 12 ) * 360
}

const minuteHandRotation = (arg) => {
    return (arg / 60) * 360
}

const secondHandRotation = (arg) => {
    return (arg / 60) * 360
}