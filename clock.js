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
      if(mElapsed>=59){
        mElapsed = 0
        if(hElapsed>=11){
          hElapsed = 0
        } else {
          hElapsed++
        }
      } else {
        mElapsed++
      }
    } else {
      sElapsed++
    }
    sAngle = sElapsed/60*360
    sHand.style.transform = "rotate("+sAngle+"deg)"
    mAngle = mElapsed/60*360
    mHand.style.transform = "rotate("+mAngle+"deg)"
    hAngle = hElapsed/12*360
    hHand.style.transform = "rotate("+hAngle+"deg)"
  }, 1000)

})
  