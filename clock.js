let Minute = document.querySelector('#minute');
let Second = document.querySelector('#second');
let Hour = document.querySelector('#hour');

let degrees = 45;


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

minRot.style.transform = "rotate(minRot)"
secondRot.style.transform = "rotate(secondRot)"
hourRot.style.transform = "rotate(hourRot)"

}

setInterval(TimeClc , 1000)
