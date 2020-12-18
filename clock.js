let degreeSecond = 6

const secondRotation=()=> {
    let second = document.getElementById('second')
    degreeSecond = degreeSecond + 6
    second.style.transform = 'rotate(' + degreeSecond + 'deg)';
}
setInterval(secondRotation, 1000)


let degreeMinute = 6

const minuteRotation=()=> {
    let minute = document.getElementById('minute')
    degreeMinute = degreeMinute + 6
    minute.style.transform = 'rotate(' + degreeMinute + 'deg)';
}
setInterval(minuteRotation, 60000)

let degreeHour = 6

const hourRotation=()=> {
    let hour = document.getElementById('hour')
    degreeHour = degreeHour + 6
    hour.style.transform = 'rotate(' + degreeHour + 'deg)';
}
setInterval(hourRotation, 36000000)