// grab second, minute, and hour hands

let secondHand = document.getElementById("second")
let minuteHand = document.getElementById("minute")
let hourHand = document.getElementById("hour")
    
    function setRotation(element, degrees) {
        console.log(setRotation)
        // Use CSS transform to rotate the hands of the clock.
        // Change CSS values by getting reference to them through DOM and setting a new value to their CSS properties
        // secondHand.style.transform = `rotate(${degrees+6}deg)`
        // minuteHand.style.transform = `rotate(${degrees+180}deg)`
        // hourHand.style.transform = `rotate(${degrees+30}deg)`
        element.style.transform = `rotate(${degrees+90}deg)`;
    }
    // function second() {
    //     for (i = 0; i <60; i++) {
    //         second = (i/60) * 360
    //         console.log(second)
    //   }
    function currentTime() {
        // get the current time
        const now = new Date();

        // break it down to hours, minutes and seconds
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        // calculate degrees around the clock for seconds, minutes, hour
        const secondsDegrees = (seconds / 60) * 360;
        const minutesDegrees = (minutes / 60) * 360 + (seconds/60)*6;
        const hoursDegrees = (hours / 12) * 360 + (minutes/60)*30;

        // This is how the hands on the clock moves
        setRotation(secondHand, secondsDegrees);
        setRotation(minuteHand, minutesDegrees);
        setRotation(hourHand, hoursDegrees);
        console.log(setRotation)
    }

    // Set the initial clock state, and update it every second
    setInterval(currentTime, 1000);
    currentTime();