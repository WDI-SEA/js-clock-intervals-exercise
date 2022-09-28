
//      let seconds=15

// function moveSeconds(){
//   let degInput = 0
//  let secondsHand=0;

//   secondsHand = seconds/5;
// degInput = secondsHand*30
//  document.getElementById("second").style.transform = `rotate(${degInput}deg)`
//  seconds = seconds+1
// console.log(seconds)
  
// }
// }
function initialPos(){
  movehours();
  moveMinutes();
}
function moveSeconds(){
    let degInput = 0
   let secondsHand=0;
      let seconds=new Date().getSeconds()
    secondsHand = seconds/5;
  degInput = secondsHand*30
   document.getElementById("second").style.transform = `rotate(${degInput}deg)`
}  
function movehours(){
    let degInput = 0
      let hours=new Date().getHours()
    
  degInput = hours*30
   document.getElementById("hour").style.transform = `rotate(${degInput}deg)`
   console.log(degInput)
}  
function moveMinutes(){
    let degInput = 0
   let minutesHand=0;
      let minutes=new Date().getMinutes()
    minutesHand = minutes/5;
  degInput = minutesHand*30
   document.getElementById("minute").style.transform = `rotate(${degInput}deg)`
   console.log(degInput)
}  
 
 initialPos();
setInterval(moveSeconds,1000)//every second
setInterval(moveMinutes,60000)//every 60 seconds
setInterval(movehours,3600000)//every 60 minutes