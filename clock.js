const secondsElement = document.getElementById("second");
const minsElement = document.getElementById("minute")
const hourElement = document.getElementById("hour");

 function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsElement.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsElement.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  console.log(hour)
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  console.log(hourDegrees)
  hourElement.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);

setTime();





