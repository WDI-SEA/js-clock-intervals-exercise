let secondDegree = 0
let minuteDegree = 0
let hourDegree = 0

const secondRotation = () => {
    const el = document.getElementById("second")
el.style.transform = "rotate(" + secondDegree + "deg)"
secondDegree += 6
}
setInterval(secondDegree,1000)

const minuteRotation = () => {
    const el = document.getElementById("minute")
el.style.transform = "rotate(" + minuteDegree + "deg)"
minuteDegree += 1
}
setInterval(minuteDegree,1000)

const hourRotation = () => {
    const el = document.getElementById("second")
el.style.transform = "rotate(" + hourDegree + "deg)"
secondDegree += 1
}
setInterval(hourDegree,1000)


