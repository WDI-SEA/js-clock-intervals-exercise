// BONUS: Get current date/time

// const now = new Date();

// const second = now.getSeconds();
// const minute = now.getMinutes();
// const hour = now.getHours();

// Create intervals in the JavaScript file to make the clocks tick
let degreesSecond = 6
let degreesMinute = 6
let degreesHour = 30

const secondHand = () => {
    let second = document.getElementById('second')
    second.style.transform = `rotate(${degreesSecond}deg)`
    degreesSecond+=6
}
setInterval(secondHand, 1000)

const minuteHand = () => {
    let minute = document.getElementById('minute');
    minute.style.transform = 'rotate(' + degreesMinute + 'deg)';
    degreesMinute+=6
}
setInterval(minuteHand, 60000)

const hourHand = () => {
    let hour = document.getElementById('hour');
    hour.style.transform = 'rotate(' + degreesHour + 'deg)';
    degreesHour+=30
}
setInterval(secondHand, 1000)