let secondDegree = 0
let minuteDegree = 0
let hourDegree = 0

const secondRotation = () => {
    const el = document.getElementById("second")
el.style.transform = "rotate(" + secondDegree + "deg)"
secondDegree += 6
}
setInterval(secondDegree,1000)


