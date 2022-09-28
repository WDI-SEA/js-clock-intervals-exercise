let Minute = document.querySelector('#minute');
let Second = document.querySelector('#second');
let Hour = document.querySelector('#hour');


const TimeClc = () => {

let secondRot = () => { 
    return (Second / 60 *360)

}

let minRot = () => { 
    return (Minute / 60 *360)

}

let hourRot = () => { 
    return (Hour / 60 *360)

}

Minute.style.transform = `rotate(${minRot}deg)`
Second.style.transform = `rotate(${secondRot}deg)`
Hour.style.transform = `rotate(${hourRot}deg)`

}

setInterval(TimeClc , 1000)
