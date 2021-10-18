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
  }, 1000)

  setInterval(() => {
    
  }, 1000)
})
  