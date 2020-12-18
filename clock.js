
let degreeSec = 6

const secondRotation=()=> {
    let second=document.getElementById('second')
    second.style.transform = "rotate(" + degreeSec + "deg)";
    degreeSec+=6
}
setInterval(secondRotation, 1000)

let degreeMin = 6

const minuteRotation=()=> {
    let minute=document.getElementById('minute')
    minute.style.transform = "rotate(" + degreeMin + "deg)";
    degreeMin+=6
}
setInterval(minuteRotation, 60000)

let degreeHour = 30

const hourRotation=()=> {
    let hour=document.getElementById('hour')
    hour.style.transform = "rotate(" + degreeHour + "deg)";
    degreeHour+=30
}
setInterval(hourRotation, 3600000)


// let clockElement = document.querySelector('#hour')
// let clockElement = document.querySelector('#minute')
// let clockElement = document.querySelector('#second')
// let offset = -90;
// const getTime = () => {
// const now = new Date();

// const seconds = now.getSeconds();
//         const secondsDegree = (((seconds / 60) * 360) + 90);
//         secondHand.style.transform = `rotate(${secondsDegree}deg)`


//         const minutes = now.getMinutes();
//         const minutesDegree = (((minutes / 60) * 360) + 90);
//         minuteHand.style.transform = `rotate(${minutesDegree}deg)`


//         const hours = now.getHours();
//         const hoursDegree = (((hours / 60) * 360) + 90);
//         hourHand.style.transform = `rotate(${hoursDegree}deg)`

// const secondsDegree = (((seconds / 60) * 360))
// const minutesDegree = (((minutes / 60) * 360))
// const hoursDegree = (((hours / 60) * 360))
// }
// setInterval(getTime, 1000)

// const now 
// let timer = () => {
//     let date = new Date();
//     let milliseconds = date.getMilliseconds();
//     let seconds = date.getSeconds();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();

//     seconds += milliseconds / 1000;
//     minutes += seconds / 60
//     hours += minutes / 60

//     if (hours > 12) {
//         hours -= 12;
//     }

//     clockElement.style.setProperty('--seconds', offset + 6 * seconds + 'deg');
//     clockElement.style.setProperty('--minutes', offset + 6 * minutes + 'deg');
//     clockElement.style.setProperty('--hours', offset + 30 * hours + 'deg');

//     requestAnimationFrame(timer);

// }
// timer()

// // let seconds=()=>{
// //     let date = new Date();
// //     let seconds = date.now;
// // }

// // let minutes=()=>{
// //     let minutes = Date
// // }

// // let hours=()=>{
// //     let hours = Date.now().getHours();
// // }

// // seconds = (360 / 100) * ((seconds / 60) * 100);
// // minutes = (360 / 100) * ((minutes / 60) * 100);
// // hours = (360 / 100) * ((hours / 12) * 100);

// // // Date.now().getHours
// // // Date.now().getMintues
// // // Date.now().getSeconds