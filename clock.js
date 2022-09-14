const clockFace = document.getElementById('face')
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')


clockFace.style.position = 'absolute'
hourHand.style.position = 'absolute'
minuteHand.style.position = 'absolute'
secondHand.style.position = 'absolute'



//return how many degrees the hour hand needs to move each rotation
const hourRotation = (num) => {
     return (num / 12) * 360
}

//return how many degrees the second and minute hands need to move on each rotaion
const secMinRotation = (num) => {
    return (num / 60) * 360
}

//gets real time seconds and using that info, lets the second hand know 
// how many degrees to rotate (using above function) in real time
const secondTick = () => {
    const now = new Date()
    let degrees = secMinRotation(now.getSeconds());
    const el = secondHand
    el.style.transform = "rotate(" + degrees + "deg)"
}


//same as above but minutes
const minuteTick = () => {
    const now = new Date()
    let degrees = secMinRotation(now.getMinutes());
    const el = minuteHand
    el.style.transform = "rotate(" + degrees + "deg)"
}

//same as above but hours
const hourTick = () => {
    const now = new Date()
    let degrees = hourRotation(now.getHours() % 12 || 12);
    console.log(degrees)
    const el = hourHand
    el.style.transform = "rotate(" + degrees + "deg)"
}

//removes lag on clock on reload
//by returning updated and accurate current time
const setCurrentTime = () => {
    secondTick()
    minuteTick()
    hourTick()
}

//inititates each hand on clock's respective functions and sets the interval to run
//every second to check if ready to rotate
setCurrentTime()
setInterval(secondTick, 1000)
setInterval(minuteTick, 1000)
setInterval(hourTick, 1000)




