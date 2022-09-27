const minE1 = document.querySelector('#minute');
const secE1 = document.querySelector('#second');
const hourE1 = document.querySelector('#hour');
setInterval(()=>{
    const date = new Date;
    const secDeg = date.getSeconds()*60;
    const minDeg = date.getMinutes()*60;
    const hourDeg = date.getHours()*10;

    secE1.style.transform = `rotate(${secDeg}deg)`;
    minE1.style.transform = `rotate(${minDeg}deg)`;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;
}, 1000)

const today = new Date();
const time = today.getHours() + today.getMinutes() + ":" + today.getSeconds();

console.log(time)