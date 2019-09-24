/*
Objective: have clock where seconds, minute, and hour hands tick

Breakdown: 1. call seconds, minutes, and hour ID's from HTML document
-interval for second hand ticks (function that changes degrees )
2. set functions where they roate
3. set intervals for the second, minute, and hour hand 

*/

//Global Functions:
var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hour = document.getElementById("hour");
var degrees = 0;
var minDegrees = 0;
var hourDegrees = 0;

//Smooth Second Hand Movement
let smoothSec = setInterval(function(){
    degrees = degrees + 1 
    sec.style.transform="rotate(" + degrees + "deg)";
}, 1000/6) //cover 6 degrees in a second 

//Smooth Minute Hand Movement 
let minuteHandInterval = setInterval(function(){
    minDegrees = minDegrees + .5 // incriment minute hand
    min.style.transform="rotate(" + minDegrees + "deg)";
},(60000/6)/2)

//Smooth Hour Hand Movement 
let hourHandInterval = setInterval(function(){
    hourDegrees = hourDegrees + (360/12) // incriment hour hand
    hour.style.transform="rotate(" + hourDegrees + "deg)";
},(3600000/12))




// Second Rotation:
// let secondHandInterval = setInterval(function(){
//     degrees = degrees + 6 //incriment for the second hand 
//     sec.style.transform = "rotate(" + degrees + "deg)";
// }, 1000)

//Minute Rotation
// let minuteHandInterval = setInterval(function(){
//     degrees = degrees + 6 // incriment minute hand
//     min.style.transform="rotate(" + degrees + "deg)";
// },60000)

// //Hour Rotation
// let hourHandInterval = setInterval(function(){
//     degrees = degrees + 6 // incriment minute hand
//     min.style.transform="rotate(" + degrees + "deg)";
// },3600000)

