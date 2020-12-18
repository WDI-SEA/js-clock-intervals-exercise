const makeClockMove = () => {
let day = new Date();
let currentHour = (day.getHours()) - 12;
let currentMinutes = day.getMinutes();
let currentSeconds = day.getSeconds();
let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");

function secondHandRotation(){
    let seconds = (currentSeconds/60)*360;
    return secondHand.style.transform = "rotate(" + seconds +"deg)";
}

function minuteHandRotation(){
    let minutes = (currentMinutes/60)*360;
    return minuteHand.style.transform = "rotate(" + minutes + "deg)";
}

function hourHandRotation(){
    let hour = (currentHour/12) * 360;
    return hourHand.style.transform = "rotate(" + hour + "deg)";
}
secondHandRotation();
minuteHandRotation();
hourHandRotation();
}

setInterval(makeClockMove, 1000);