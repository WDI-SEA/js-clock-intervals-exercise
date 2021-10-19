

const secondHand = document.getElementById("second")
const minutehand = document.getElementById('minute')
const hourHand  = document.getElementById("hour")

let deg = 45;
let el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";
let sec = 0;

const clockInt = () => {

  rotate(secondHand, 1)
  
 }


 const rotate = (el, deg) =>{
    el.style.transform = `rotate(${deg}deg)`
  }
const rotateSecond = (secondHand, 50)

setInterval(clockInt, 1000)