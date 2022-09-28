document.addEventListener("DOMContentLoaded", function (){
    let second = document.getElementById('second');
    const date = new Date();
    let secondsDegrees = (date.getSeconds()/60)*360;
    let minutesDegrees = (date.getMinutes()/60)*360;
    let hoursDegrees = (((date.getHours()-12) / 360) *12) + date.getMinutes()/10;
    // console.log(  date.getMinutes() );
    // console.log("hours1", (date.getHours() - 12) * 360 / 12);
    
    const secondRotate = () => {
        second.style.transform = "rotate(" + secondsDegrees + "deg)";
        secondsDegrees += 6;
        // console.log("secondsDegrees", secondsDegrees);
    }

     const minuteRotate = () => {
        minute.style.transform = "rotate(" + minutesDegrees + "deg)";
         minutesDegrees += 6;
        setTimeout(hourRotate(), 1000);
     }
    
      const hourRotate = () => {
        hour.style.transform = "rotate(" + hoursDegrees + "deg)";
          hoursDegrees += .54;
        //   console.log('hoursDegree',hoursDegrees)
      }
    
    





    setInterval(() => {

        setInterval(secondRotate(), 100);

        if (secondsDegrees === 360) {
            secondsDegrees = 0;
            setTimeout(minuteRotate(), 1000);
            console.log("minutesDegrees",minutesDegrees);

        }
        if (minutesDegrees === 360) {
            minutesDegrees = 0;
            console.log("minutesDegrees",minutesDegrees);
            console.log("hourssDegrees",hoursDegrees);
        }

    }, 1000);
})