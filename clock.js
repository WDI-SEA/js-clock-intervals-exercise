// let degrees= 145;
// const el = document.getElementById("hour")
// el.style.transform = "rotate(" + degrees + "deg)"

const secondHand=document.getElementById("second")
const minuteHand=document.getElementById("minute")
const hourHand=document.getElementById("hour")




setInterval(()=>{
   const today = new Date;
   const secDeg = today.getSeconds()*6;
   const minDeg = today.getMinutes()*6;
   const hourDeg = today.getHours()*11;
   secondHand.style.transform = `rotate(${secDeg}deg)`;
   minuteHand.style.transform = `rotate(${minDeg}deg)`;
   hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000)



// DRAFT
// function clockRunner() {
//   let date = new Date()
//   let currentSecond = date.getSeconds();
//   let secondRotation = 6 * currentSecond + "deg";
// secondHand.style.transform = "rotate(" + secondRotation + ")";
// document.getElementById("secondHand").style.transformOrigin = "center 91%";
// }