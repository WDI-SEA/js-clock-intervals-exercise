
let hourImg = document.getElementById("hour")
let minuteImg = document.getElementById("minute")
let secondImg = document.getElementById("second")
let rotateSec = document.getElementsByClassName("rotateSec")


//always start from1
let count = 1
//the second hand movement angle is set to 6 degrees 
let iSecAngle= 6
let iMinAngle=6
let iHourAngle=0

let tiktok = () => {
  console.log(count)

secondImg.style.transform = `rotate(${iSecAngle}deg)`
iSecAngle = iSecAngle+6

  count++
  if (count <=60) {
    setTimeout(tiktok, 1000)
  
  }

  if(count==61){
    minuteImg.style.transform = `rotate(${iMinAngle}deg)`
    iMinAngle = iMinAngle+6
    hourImg.style.transform = `rotate(${iHourAngle}deg)`
    iHourAngle = iHourAngle+0.5
  }

  if(count>60){
    count=1
    setTimeout(tiktok, 1000)
  }


}


// setTimeout(tiktok(), 60000)
setInterval(tiktok(), 60000)







