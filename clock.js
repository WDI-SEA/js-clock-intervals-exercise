const hr = document.querySelector('#hour');
const mn = document.querySelector('#minute');
const sc = document.querySelector('#second');

setInterval(()=>{
    const date = new Date;
    const hourDeg = date.getHours()/12*360-90;
    const minDeg = date.getMinutes()/60*360-90;
    const secDeg = date.getSeconds()/60*360-90;

    sc.style.transform = `rotate(${secDeg}deg)`;
    mn.style.transform = `rotate(${minDeg}deg)`;
    hr.style.transform = `rotate(${hourDeg}deg)`;
}, 1000)