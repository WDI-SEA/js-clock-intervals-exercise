document.addEventListener('DOMContentLoaded', function(e) {

    // Define Vars
    const secHand = document.getElementById('second')
    const minHand = document.getElementById('minute')
    const hourHand = document.getElementById('hour')
    let secDeg = 0;
    let minDeg = 0;
    let hourDeg = 0;

    // Create rotate function
    function moveClockHand() {
        let oneDeg = 6
        secDeg += oneDeg
        secHand.style.transform = 'rotate('+secDeg+'deg)'
        if(secDeg%60 == 0) {
            minDeg++
            minHand.style.transform = 'rotate('+minDeg+'deg)'
            if(minDeg%6 == 0) {
                secDeg = 0
            }
            if(minDeg%60 == 0) {
                hourDeg++
                hourHand.style.transform = 'rotate('+hourDeg+'deg)'
                if(hourDeg%6 == 0) {
                    minDeg = 0
                }
                if(hourDeg%360 == 0) {
                    hourDeg = 0
                }
            }
        }
        console.log(secDeg, minDeg, hourDeg)
    }

    // Call rotations functions
    //setInterval(moveClockHand, 1)

    /*~~~~~~~~~~~~~~~~      Date BONUS      ~~~~~~~~~~~~~~~~~~~~~*/

    const myDate = document.querySelector('#dates')

    function myTime() {
        let oneDeg = 6;
        let today = new Date()
        let seconds = today.getSeconds()
        let minutes = today.getMinutes()
        let hours = today.getHours()

        myDate.innerText = 'Today: ' + today
        
        seconds *= oneDeg
        secHand.style.transform = 'rotate('+seconds+'deg)'
        minutes *= oneDeg
        minHand.style.transform = 'rotate('+minutes+'deg)'
        hours *= oneDeg
        hourHand.style.transform = 'rotate('+hours+'deg)'
    }

    setInterval(myTime, 100)
})