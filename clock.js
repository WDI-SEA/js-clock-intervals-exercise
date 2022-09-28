const hour = document.querySelector("#hour")
const min = document.querySelector("minute")
const sec = document.querySelector("#second")
setInterval(function(){
    const date = new Date
    const degHour = date.getHours()/12*360
    const degMin = date.getMinutes()/60*360
    const degSec = date.getSeconds()/60*360
    hour.style.transform = `rotate(${degHour}deg`
    min.style.transform = `rotate(${degMin}deg)`
    sec.style.transform = `rotate(${degSec}deg)`
}, 1000)