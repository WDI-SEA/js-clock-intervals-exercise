let degrees = 45; 
// setting variables for hands on the clock
const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")

// function to transform the hands every 1000 milliseconds

setInterval(() =>{
    const date = new Date();
    // gives us the current date and time
    // date.get"time"() is how we are able to obtain the different measurements of time
    let secDeg = date.getSeconds()/60 * 360 -90; //60 represents 60 seconds in a minute, 360 represents the full degrees of the clock
    let hrDeg = date.getHours()/12 * 360 -90; //found a bug where the clock is on military time 
    let minDeg = date.getMinutes()/60 * 360-90;//60 minutes in an hour, 360 degrees on the clock, 90 to start at the top 
    second.style.transform = `rotate(${secDeg}deg)` //string interpolation -taking the value of the degree variables and using that to rotate the hands
    minute.style.transform = `rotate(${minDeg}deg)`
    hour.style.transform = `rotate(${hrDeg} deg)`
   console.log(date)
}, 1000)



// minute.style.transform = "rotate(" + minPosition + "deg)"
// hour.style.transform = "rotate(" + secPosition + "deg)"

// function secondRotation(sec){
//     let date = new Date();
//      sec = date.getSeconds();
//     let secPosition = sec * 360/60;
//     return secPosition
// }
// secondRotation(60)

// function hourRotation(){
//     let date = new Date();
//     let hr = date.getHours();
//     let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
// }
// function minuteRotation(){
//     let date = new Date();
//     let min = date.getMinutes();
//     let minPosition = (min * 360/60) + (sec* 360/60)/60;
// }

// console.log(`Hour: ${hr} Min: ${min} Sec: ${sec}`);

