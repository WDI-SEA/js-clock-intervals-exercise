document.addEventListener('DOMContentLoaded', () => {

  const sHand = document.getElementById('second')
  const mHand = document.getElementById('minute')
  const hHand = document.getElementById('hour')
  let sElapsed = 0
  let mElapsed = 0
  let hElapsed = 0
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

})
  