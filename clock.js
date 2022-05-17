// Creating our elements for minute, hour, second
const hourHand = document.querySelectorAll(".hour")
const minuteHand = document.querySelectorAll(".minute")
const secondHand = document.querySelectorAll(".second")

// Creating clock function and setting 'new Date'  to use our browsers current date/time
    function startClock() {
    const currentDate = new Date();
        // console.log(currentDate);
    
//  Using built in "get" methods to log min/hr/sec
        const getSecond = currentDate.getSeconds();
        // console.log(getSeconds);
        const getMinute = currentDate.getMinutes();
        // console.log(getMinutes);
        const getHour = currentDate.getHours();
        // console.log(getHours);

// Setting the hand rotations utilizing the DOM for changing degrees in css
        const secondDegree = (getSecond / 60) * 360;
        second.style.transform = `rotate(${secondDegree}deg)`;

        const minuteDegree = (getMinute / 60) * 360;
        minute.style.transform = `rotate(${minuteDegree}deg)`;
        
        const hourDegree = (getHour / 12) * 360;
        hour.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(startClock, 1000);

// Calling the startClock function so clock hands don't reset on page reload
startClock();

