//focus on each hand moving on its own interval
//One section for each hand
//each hand would involve its own set intervals

//grab the elements that corrsepond with each hand

//Grabbing the DOM in the beginning

// let secHand = 0;
// let minHand = 0;
// let hrHand = 0;

const hourRotation = (arg) => {
  return (arg / 12) * 360;
};

const minuteRotation = (arg) => {
  return (arg / 60) * 360;
};

const secondRotation = (arg) => {
  return (arg / 60) * 360;
};

const date = new Date();
let sec = document.getElementById("second");
const se = date.getSeconds();
const degree = secondRotation(se);
sec.style.transform = "rotate(" + degree + "deg)";

let min = document.getElementById("minute");
const mi = date.getMinutes();
const minHand = minuteRotation(mi);
min.style.transform = "rotate(" + minHand + "deg)";

let hr = document.getElementById("hour");
const hour = date.getHours();
const hrHand = hourRotation(hour);
hr.style.transform = "rotate(" + hrHand + "deg)";

// function second() {
//   if (secHand >= 60) {
//     console.log(secHand);
//     i++;
//     setInterval(second, 1000);
//   }
// }

setInterval(sec, 1000)
setInterval(min, 1000)
setInterval(hr, 1000)
