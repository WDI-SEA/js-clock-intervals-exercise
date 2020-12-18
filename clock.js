// let face = document.getElementById('#face')
// let hour = document.getElementById('#second')
// let minute = document.getElementById('#minute')
// let second = document.getElementById('#hour')

// var degreesSecond = 1


let degreeSeconds = 6
let degreeMinutes = 6
let degreeHours = 30

const secondRotation=()=> {
    let second = document.getElementById('second')
    second.style.transform = "rotate(" + degreeSeconds + "deg)";
    degreeSeconds+=6
}

setInterval(secondRotation, 1000)

const minuteRotation=()=> {
    let minute = document.getElementById('minute')
    minute.style.transform = "rotate(" + degreeMinutes + "deg)";
    degreeMinutes+=6
}
setInterval(minuteRotation, 60000)

const hourRotation=()=> {
    let hour = document.getElementById('hour')
    hour.style.transform = "rotate(" + degreeHours + "deg)";
    degreeHours+=30
}

setInterval(hourRotation, 3600000)

function myFunction() {
    var d = new Date();
    var n = d.getTimezoneOffset();
    document.getElementById("demo").innerHTML = n;
  }