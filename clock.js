// //1 put the hand together-css
// //2 order the images hours/mintues/seconds (top) -css(z-index)/html
// // ------------------ done
// //3 write a function that calculate the degrees of rotation for each hand(time intervals)
// // And Use the Dom style in js to rotate hands

// // Grab the elements
// const secondHand = document.getElementById('second')
// const minuteHand = document.getElementById('minute')
// const hourHand = document.getElementById('hour')
// // initialize variables

// // console.log('currentTime Object')
// // console.dir(currentTime)
// let second = currentTime.getSeconds()
// let mintues = currentTime.getMintues() 
// let hours = currentTime.getHours()
// let angle = 0
// angle+=6
// //one function for initial position-DOM

// //running setInterval
// function ClockWorker(){
//     //calculate rotation angles and intervals
//     // apply rotation styles
//     //secondsHand
//     let currentTime = new Date()
//     let minteAngle = currentTime.getMinutes() * 6
//     let secondsAngle = currentTime.getSeconds() * 6
//     let HoursAngle = currentTime.getHours() * 30 + (30*(minteAngle/360))
// // 360/12=30
// secondHand.style.transform = `rotate(${secondAngle}deg)`
// minuteHand.style.transform = `rotate(${minuteAngle}deg)`
// hourHand.style.transform = `rotate(${hourAngle}deg)`
// }

// setInterval(() => {
//       ClockWorker()
// },1000)



// 1.
//Put the hands together - CSS
// Order the images hours/minutes/seconds (top) -CSS(z-index)/HTML 
// ------------------------------ DONE

// 2.
// Write a function that calculates the degrees of rotation for each hand (time intervals)
// AND Use DOM style in JS to rotate hands


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

// // let degrees = 45;

// // const el = document.getElementById("myElement")
// // el.style.transform = "rotate(" + degrees + "deg)"

// // secondRotation(0) // returns 0
// // secondRotation(59) // returns (59 / 60) * 360

// // hourRotation(12) // returns 0
// // hourRotation(5) // returns (5 / 12) * 360
// //const now = new Date()
// let hour = document.getElementById("#hour")
// let minute = document.getElementById("#minute")
// let second = document.getElementById("#second")
// let degrees = 0;
// let secondsCount = 0;
// let minutesCount = 0;
// let hoursCount = 0;


// const secondClick = () => {
//     const secondsTick = () => {
//         console.log('rotate seconds')
//         degrees = degrees + (360/60)
//         second.style.transform = `rotate(${degrees}deg)`
//         //"rotate(" + degrees + "deg)"
//         secondCount++
//         if (secondsCount == 59){
//             secondsCount =0
//             minuteClick()
//         }
//         console.log(secondsCount)
    
            
// //secondsCount = 0
// }   
// setInterval(secondsTick, 300)
//     }
  

// const minuteClick = () => {
//     // const minutesTick = () => {
//         console.log('rotate minutes')
//         degrees = degrees + (360/60);
//         mintue.style.transform = `rotate(${degrees}deg)`
//         //"rotate(" + degrees + "deg)
//         minutesCount++
//         console.log(minutesCount)
//     }
// setInterval(minutesTick, 1000)

// document.addEventListener("DOMContentLoaded", ()=> {
//     secondsTick()
// })



// const minE1 = document.querySelector('#minute');
// const secE1 = document.querySelector('#second');
// const hourE1 = document.querySelector('#hour');
// setInterval(()=>{
//     const Date = new Date;
//     const secDeg = today.getSeconds()*6;
//     const minDeg = today.getMinutes()*6;
//     const hourDeg = today.getHours()*30;
//     secE1.style.transform = `rotate(${secDeg}deg)`;
//     minE1.style.transform = `rotate(${minDeg}deg)`;
//     hourE1.style.transform = `rotate(${hourDeg}deg)`;
// }, 1000)

// const minE1 = document.querySelector('#minute');
// const secE1 = document.querySelector('#second');
// const hourE1 = document.querySelector('#hour');
// setInterval(()=>{
//     const date = new Date;
//     const secDeg = date.getSeconds()/60*360-90;
//     const minDeg = date.getMinutes()/60*360-90;
//     const hourDeg = date.getHours()/12*360-90;
//     secE1.style.transform = `rotate(${secDeg}deg)`;
//     minE1.style.transform = `rotate(${minDeg}deg)`;
//     hourE1.style.transform = `rotate(${hourDeg}deg)`;
// }, 1000)