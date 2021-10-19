let degrees = 6;
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const setTime = () => {
  let currentDate = new Date();
  let hr = currentDate.getHours() * 30;
  let min = currentDate.getMinutes() * 6;
  let sec = currentDate.getSeconds() * 6;

  hour.style.transform = `rotate(${hr + min / 12}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  second.style.transform = `rotate(${sec}deg)`;
};
setInterval(setTime, 1000);

setTime();
