let secondDegree = 6;
let minuteDegree = 6;
let hourDegree = 30;

const secondRotation = () => {
  let second = document.getElementById('second');
  second.style.transform = 'rotate('+secondDegree+ 'deg)';
  secondDegree += 6;
}
setInterval(secondRotation, 1000);

const minuteRotation = () => {
  let minute = document.getElementById('minute');
  minute.style.transform = 'rotate('+minuteDegree+ 'deg)';
  minuteDegree += 6;
}
setInterval(minuteRotation, 60000);

const hourRotation = () => {
  let hour = document.getElementById('hour');
  hour.style.transform = 'rotate('+hourDegree+ 'deg)';
  hourDegree +=6;
}
setInterval(hourRotation, 3600000);
