  var faceEl = document.getElementById('face');
  var second = document.getElementById('second');
  var minute = document.getElementById('minute');
  var hour = document.getElementById('hour');

  function secondRotation(second) {

        return (second / 60) * (360); 

  }

  function hourRotation(hour) { 

    return (hour / 12) * (360); 
  }

function minuteRotation(minute) {
    //var wholenumbers= (minute/60) * (360)
    //return wholeminutes
    return (minute / 60) * (360); 
  }
//initClock(); 
  var secondDegrees = 6; 
  var minuteDegrees = 6; 
  var hourDegrees = 30; 


  second = setInterval(function() {
  var el = document.getElementById("second");
  el.style.transform = "rotate(" + secondDegrees + "deg)";
//degrees = secondRotation(second); 
  secondDegrees = secondDegrees + secondRotation(second); 
  console.log("i am logging secondRotation" + secondRotation(second)); 
  }, 1000);

/*setTimeout(function() {
    clearInterval(second);
    console.log("I just stopped the interval");
  }, 60000);*/
 // setTimeout(second, 60000); 

  minute = setInterval(function() {
    var el1 = document.getElementById("minute");
    el1.style.transform = "rotate(" + minuteDegrees + "deg)";
    //degrees = secondRotation(second); 
    minuteDegrees = minuteDegrees + minuteRotation(minute); 
    console.log("i am logging secondRotation" + minuteRotation(minute)); 
    
    }, 60000);
    
    /*setTimeout(function() {
        clearInterval(minute);
        console.log("I just stopped the interval");
      }, 360000); */
    

  
  hour = setInterval(function() {
    var el2 = document.getElementById("hour");
    el2.style.transform = "rotate(" + hourDegrees + "deg)";
    hourDegrees = hourDegrees + hourRotation(hour); 
    console.log("i am logging secondRotation" + hourRotation(hour)); 


    }, 3600000);
    
   /*setTimeout(function() {
        clearInterval(hour);
        console.log("I just stopped the interval");
      }, 3600000);   */


    
