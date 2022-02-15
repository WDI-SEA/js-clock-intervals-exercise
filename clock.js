let countSecs = 0
let countMins = 0
let countHrs = 0


// Function to run and update the clock every second
const secondTick = () => {
    countSecs++
    // Function to convert seconds to degrees and return the converted value
    const secondConvert = (countSecs) => {
        degreesSeconds = (countSecs / 60) * 360
        return degreesSeconds
    }
    // Variable to holid the converted degrees from the input seconds
    degreesSecondsCss = (secondConvert(countSecs))
    // Update CSS every tick to rotate the second hand
    const elementSecond = document.getElementById("second")
    elementSecond.style.transform = "rotate(" + degreesSecondsCss + "deg)"
}
// Call the functionk to run the second-counting function and commands every second
setInterval(secondTick, 1000)


// Function to run and update the clock every minute
const minuteTick = () => {
    countMins++
    // Function to convert minutes to degrees and return the converted value
    const minuteConvert = (countMins) => {
        degreesMinutes = (countMins / 60) * 360
        return degreesMinutes
    }
    // Variable to holid the converted degrees from the input minutes
    degreesMinutesCss = (minuteConvert(countMins))
    // Update CSS every tick to rotate the minute hand
    const elementMinute = document.getElementById("minute")
    elementMinute.style.transform = "rotate(" + degreesMinutesCss + "deg)"
}

// Call the functionk to run the minute-counting function and commands every minute
setInterval(minuteTick, 60000)

// Function to run and update the clock every hourdd
const hourTick = () => {
    countHrs++
    // Function to convert hours to degrees and return the converted value
    const hourConvert = (countHrs) => {
        degreesHours = (countHrs / 12) * 360
        return degreesHours
    }
    // Variable to holid the converted degrees from the input hours
    degreesHoursCss = (hourConvert(countHrs))
    // Update CSS every tick to rotate the hour hand
    const elementHour = document.getElementById("hour")
    elementHour.style.transform = "rotate(" + degreesHoursCss + "deg)"
}
// Call the functionk to run the hour-counting function and commands every hour
setInterval(hourTick, 3600000)
