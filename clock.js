let degrees = 45; 

const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")

let date = new Date();
 let hr = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();






second.style.transform = "rotate(" + hrPosition + "deg)"
minute.style.transform = "rotate(" + minPosition + "deg)"
hour.style.transform = "rotate(" + secPosition + "deg)"

function secondRotation(sec){
    let date = new Date();
     sec = date.getSeconds();
    let secPosition = sec * 360/60;
    return secPosition
}
secondRotation(60)

function hourRotation(){
    let date = new Date();
    let hr = date.getHours();
    let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
}
function minuteRotation(){
    let date = new Date();
    let min = date.getMinutes();
    let minPosition = (min * 360/60) + (sec* 360/60)/60;
}

console.log(`Hour: ${hr} Min: ${min} Sec: ${sec}`);

