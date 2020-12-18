document.addEventListener('DOMContentLoaded', ()=> {
    
    //Initialize the Date variable
    let d = new Date()
    
    //Initialize second variables
    let degrees = 0;
    let count = d.getSeconds();
    
    //Initialize minute variables
    let minuteDegrees = 0;
    let minuteCount = d.getMinutes();
    
    //Initialize hour variables
    let hourDegrees = 0;
    let hourCount = d.getHours();
    
    //Set initial clock hand positions
    degrees = (count / 60) * 360;
    minuteDegrees = (minuteCount / 60) * 360;
    hourDegrees = (hourCount / 60) * 360;
    second.style.transform = 'rotate('+degrees+'deg)';
    minute.style.transform = 'rotate('+minuteDegrees+'deg)';
    hour.style.transform = 'rotate('+hourDegrees+'deg)';
    
    //Initialize helper function
    const secondTick = () => {
        count++;
        degrees = (count / 60) * 360;
        second.style.transform = 'rotate('+degrees+'deg)';
        console.log(degrees);
        
        if (count === 60) {
            count = 0;
            minuteCount++;
            minuteDegrees = (minuteCount / 60) * 360;
            minute.style.transform = 'rotate('+minuteDegrees+'deg)';
        }
        
        if (minuteCount === 60) {
            minuteCount = 0;
            hourCount++;
            hourDegrees = (hourCount / 60) * 360;
            hour.style.transform = 'rotate('+hourDegrees+'deg)';
        }
    }
    
    //Set interval running
    setInterval(secondTick, 1000)
})