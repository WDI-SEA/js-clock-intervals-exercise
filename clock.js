// setInterval(() => {
//     d = new Date(); //object of date()
//     hr = d.getHours();
//     min = d.getMinutes();
//     sec = d.getSeconds();
//     hr_rotation = 30 * hr + min / 2; //converting current time
//     min_rotation = 6 * min;
//     sec_rotation = 6 * sec;
  
//     hour.style.transform = `rotate(${hr_rotation}deg)`;
//     minute.style.transform = `rotate(${min_rotation}deg)`;
//     second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);



//Grab the elements
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
//initialize variables
// console.log('currentTime Object')
// console.dir(currentTime)
// let seconds = currentTime.getSeconds() * 6
// let minutes = currentTime.getMinutes() * 6
// let hours = currentTime.getHours()
// let angle = 0
// one function for initial position - DONE

// running setInterval
function clockWorker(){
    //calculate rotation angles & intervals
    // apply rotation styles
    let currentTime = new Date()
    let secondAngle = currentTime.getSeconds() * 6
    let minuteAngle = currentTime.getMinutes() * 6
    let hourAngle = currentTime.getHours() * 30 + (30*(minuteAngle/360))
    
    secondHand.style.transform = `rotate(${secondAngle}deg)`
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`
    hourHand.style.transform = `rotate(${hourAngle}deg)`    
}
setInterval(() => {
    clockWorker()
}, 1000)