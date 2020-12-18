// document.addEventListener('DOMContentLoaded'){
//     console.log(hello)
// }
    
//document.querySelector('#second').addEventListener('click',()=>{})

//define variables
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
// let second = document.getElementById('second')
let degreesSecond = 0
let degreesMinute = 0

// use the second variable, transform it every 1000ms one degree
const secondHand = ()=> {
    console.log('tick')
    let second = document.getElementById('second')
    second.style.transform = 'rotate('+ degreesSecond +'deg)';
    degreesSecond += 6
}

setInterval(secondHand, 1000)

//repeat the math of the second hand for the minutes
const minuteHand = ()=> {
    console.log('tick')
    let minute = document.getElementById('minute')
    minute.style.transform = 'rotate('+ degreesMinute +'deg)';
    degreesMinute += .06
}

setInterval(minuteHand, 600.00)

// //Repeat the math for the hour hand
const hourHand = ()=> {
    console.log('tick')
    let hour = document.getElementById('hour')
    hour.style.transform = 'rotate('+ hour +'deg)';
    degreesHour += .05
}

setInterval(hourHand, 60000)


// #myElement {
//     transform: rotate(45deg);
//   }

//   var degrees = 45;

// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";

secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360



//Bonus: show actual time
var d = new Date();
document.getElementById(date).innerHTML = d;
console.log(Date)
