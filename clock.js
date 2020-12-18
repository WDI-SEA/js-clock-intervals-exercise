document.addEventListener('DOMContentLoaded', ()=> {
    
    let degrees = 0;
    let count = 0;
    const secondTick = () => {
        count++;
        degrees = (count / 60) * 360;
        second.style.transform = 'rotate('+degrees+'deg)';
        console.log(degrees);
    }
    
    setInterval(secondTick, 1000)
    
    let minuteDegrees = 0;
    let minuteCount = 300;
    const minuteTick = () => {
        minuteCount++;
        minuteDegrees = (minuteCount / 60) * 360;
        minute.style.transform = 'rotate('+minuteDegrees+'deg)';
    }
    
    setInterval(minuteTick, 60000)
    
    let hourDegrees = 0;
    let hourCount = 0;
    const hourTick = () => {
        hourCount++;
        hourDegrees = (hourCount / 60) * 360;
        hour.style.transform = 'rotate('+hourDegrees+'deg)';
    }
    
    setInterval(hourTick, 3600000)
})