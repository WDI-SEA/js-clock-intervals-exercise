// put hands together (css)
// order the imgs (css/HTML)


//DONE
// write a function that calc the degree of rotation for each hand (time intervals)
// and use the DOM style in javascript to rotate hands 

// Grab the elements
const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")


// initialize variables



// one function for initial position 



// running setInterval
function clockWorker() { 
    // calc rotation intervals 
    // apply rotation styles
    let currentTime = new Date()
        let secondAngle = currentTime.getSeconds() * 6 
        secondHand.style.transform = `rotate(${secondAngle}deg)`

        let minuteAngle = currentTime.getMinutes() * 6
        minuteHand.style.transform = `rotate(${minuteAngle}deg)` 

        let hourrsAngle = currentTime.getHours() * 30
        hourHand.style.transform = `rotate(${hourrsAngle}deg)` 
    }

    
    setInterval(() => {
        clockWorker()
    }, 1000)



