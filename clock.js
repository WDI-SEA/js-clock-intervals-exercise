

setInterval(() => {
    date = new Date(); 
    hour = date.getHours();
    min= date.getMinutes();
    second = date.getSeconds();
    hrRotation = 30 * hour + min / 2;
    minRotation = 6 * min;
    secRotation = 6 * second;
  
    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
