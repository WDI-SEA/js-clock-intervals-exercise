let degreeTime = 6
const secondTime=()=> {
    let second = document.getElementById("second")
    second.style.transform = "rotate("+ degreeTime + "deg)"
    degreeTime += 6
}
setInterval(secondTime, 1000)


let degreeTime2 = 12

const minuteTime=()=> {
    let minute = document.getElementById("minute")
    minute.style.transform = "rotate(" + degreeTime2 + "deg)"
    degreeTime2 += 12
}

setInterval(minuteTime, 60000)

let degreeTime3 = 30

const hourTime=()=> {
    let hour = document.getElementById("hour")
    hour.style.transform = "rotate(" + degreeTime3 + "deg)"
    degreeTime3 += 30
    
}

setInterval(hourTime, 30000000)


// displayTime() {
//     let date = new watch();
//     let time = date.toLocaleTimeString()
//     document.getElementById("second").textContent = time;
// }
// const createClock = setInterval(displayTime,)