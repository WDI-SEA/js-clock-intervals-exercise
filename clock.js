const min = document.querySelector('#minute');
const sec = document.querySelector('#second');
const hour = document.querySelector('#hour');

setInterval(function(){
    const date = new Date
    const secToDeg = date.getSeconds()/60*360
    const minToDeg = date.getMinutes()/60*360
    const hourToDeg = date.getHours()/12*360
    sec.style.transform = `rotate(${secToDeg}deg)`
    min.style.transform = `rotate(${minToDeg}deg)`
    hour.style.transform = `rotate(${hourToDeg}deg)`
}, 1000)


