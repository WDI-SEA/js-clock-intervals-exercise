// var seconds = [];
// for (let i=0; i<60, i++){
//     seconds.map
// }
// let secondRotation = 

        //seconds f = '+';
// clockArray [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];

// let sec = 0;
// let secChange = setInterval () => {
//     if(sec>60) { 
//         sec++
// }} 1000)
// if(sec=60){
//     sec=0;
// }
// console.log(sec));

// have a function to determine the change/rotation in seconds using inerval a


//have a function to determine the change/rotation in minutes b

//have a function to determine the change/rotation for the hour hand c 

//have a function secondRotation that changes the CSS second id property transform rotate with equation a / 60 * 360
// have a function minuteRotation that changes the CSS minute id property transform rotate with equation b / 60 * 360
// have a function minuteRotation that changes the CSS minute id property transform rotate with equation c / 12 * 360

var now = new Date() //.toLocaleTimeString('en-US', { timeZone: 'America/New_York' } );

let degHours =  30;
let degMins =  6;
let degSecs =  6;

var ell = document.getElementById("hour");
ell.style.transform = "rotate(" + now.getHours() * 30 + "deg)";
var el22 = document.getElementById("minute");
ell.style.transform = "rotate(" + now.getMinutes() * 6 + "deg)";
var ell = document.getElementById("second");
ell.style.transform = "rotate(" + now.getSeconds() * 6 + "deg)";

const changeSecond=()=>{

    var el = document.getElementById("second");
    el.style.transform = "rotate(" + degSecs + "deg)";
    degSecs+=6
}
setInterval(changeSecond, 1000)

const changeMinute=()=>{
var el2 = document.getElementById("minute");
el2.style.transform = "rotate(" + degMins + "deg)";
degMins+=6
}
setInterval(changeMinute, 60000)


const changeHour=()=> {
    var el3 = document.getElementById("hour");
el3.style.transform = "rotate(" + degHours + "deg)";
degHours+=30
}
setInterval(changeHour, 3600000)
console.log(now.getUTCHours())

// var now = new Date();

// let degHours = now.getHours * 30;
// let degMins = now.getMinutes * 6;
// let degSecs = now.getSeconds * 6;


