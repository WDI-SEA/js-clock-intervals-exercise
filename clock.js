// selectors
var secondHand = document.querySelector("#second");
var minuteHand = document.querySelector("#minute");
var hourHand = document.querySelector("#hour");

// setTime
function setTime() {
  var now = new Date();

  //get sec,min,hr
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();

  let secDegree = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  let minDegree = ((minutes + seconds / 60) * 360) / 60;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;

  let hrDegree = ((hours + minutes / 60) * 360) / 12;
  // console.log(hours + minutes / 60);
  // console.log(hrDegree);
  hourHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setTime, 1000);
