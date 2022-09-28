const secondPointer = document.getElementById("second")
const minutePointer = document.getElementById("minute")
const hourPointer = document.getElementById("hour")

let secondCounter=0
let secondDegree=0


const second = ()=>{
    secondPointer.style.transform=`rotate(${secondDegree+6}deg)`
    console.log(secondCounter+1)
    secondCounter++
    secondDegree=secondDegree+6

}


const seconds = setInterval(second, 1000)


let minuteCounter=0
let minuteDegree=0


const minute = ()=>{
    minutePointer.style.transform=`rotate(${minuteDegree+6}deg)`
    console.log(minuteCounter+1)
    minuteCounter++
    minuteDegree=minuteDegree+6

}


const minutes = setInterval(minute, 1000*60)


let hourCounter=0
let hourDegree=0


const hour = ()=>{
    hourPointer.style.transform=`rotate(${hourDegree+6}deg)`
    console.log(hourCounter+1)
    hourCounter++
    hourDegree=hourDegree+6

}


const hours = setInterval(hour, 1000*60*5)