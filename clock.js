const secondDegree = document.querySelector('#second')
const minuteDegree = document.querySelector('#minute')
const hourDegree = document.querySelector('#hour')

const timeCount = () => {
    let current = new Date()
    let seconds = current.getSeconds()
    let minutes = current.getMinutes()
    let hours = (current.getHours() - 12)
    
    const secondRotation = seconds => {
        return((seconds / 60) * 360)
    }   
   
    const minuteRotation = minutes => {
        return((minutes / 60) * 360)
    }
   
    const hoursRotation = hours => {
        return((hours / 12) * 360)
    }


    secondDegree.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)'
    minuteDegree.style.transform = 'rotate(' + minuteRotation(minutes) + 'deg)'
    hourDegree.style.transform = 'rotate(' + hoursRotation(hours) + 'deg)'

}

setInterval(timeCount, 1000)

document.addEventListener('DOMContentLoaded', timeCount)
