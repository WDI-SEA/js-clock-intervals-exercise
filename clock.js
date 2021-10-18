document.addEventListener('DOMContentLoaded', () => {

  const sHand = document.getElementById('second')
  const mHand = document.getElementById('minute')
  const hHand = document.getElementById('hour')
  let now = new Date();
  let sElapsed = now.getSeconds()
  let mElapsed = now.getMinutes()*60+sElapsed
  let hElapsed = now.getHours()%12*3600+mElapsed
  let sAngle = 0
  let mAngle = 0
  let hAngle = 0

  setInterval(() => {
    if(sElapsed>=59){
      sElapsed = 0
    } else {
      sElapsed++
    }
    sAngle = sElapsed/60*360
    sHand.style.transform = "rotate("+sAngle+"deg)"

    if(mElapsed>=3599){
      mElapsed = 0
    } else {
      mElapsed++
    }
  
    mAngle = mElapsed/3600*360
    mHand.style.transform = "rotate("+mAngle+"deg)"

    if(hElapsed>=43199){
      hElapsed = 0
    } else {
      hElapsed++
    }
    hAngle = hElapsed/43200*360
    hHand.style.transform = "rotate("+hAngle+"deg)"
  }, 1000)

  setTimeout(() => {
    const clock = document.getElementById('clock')
    clock.style.display = 'initial'
  }, 1000)

})