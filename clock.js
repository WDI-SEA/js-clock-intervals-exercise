//connect the ID's from html/css to JS
let second = document.querySelector('#second')
let minute = document.querySelector('#minute')
let hour = document.querySelector('#hour')

//function to create the timer on each img of the clock dials
setInterval(()=>{
    const date = new Date;
    //gives each dial a degree of speed
    const secondDeg = date.getSeconds()/60*360-90;
    const minuteDeg = date.getMinutes()/60*360-90;
    const hourDeg = date.getHours()/12*360-90;
    //connects each dials to a transform style
    //and connects them to the calculation
    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}, 1000)
//display's todays hour, and minutes
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
console.log(time)
time.toString().split("").reverse().join('')