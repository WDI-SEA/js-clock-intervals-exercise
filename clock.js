//Global variables:
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
//var degrees = 45;

//var interval = setInterval(runClock, 1000);

//function runClock() {
  //var degrees = 1;
  
  var second = 1;
  var minute = 1;
  var hour = 1;

 setInterval(secondRotation, 1000);
 setInterval(minuteRotation, 6000);
 setInterval(hourRotation, 36000);

  
  
  /*var now = new Date();

  var second = now.getSeconds();
  var minute = now.getMinutes();
  var hour = now.getHours();
  */
  
  function secondRotation() {
    var secRotation = second * 6; // --> seconds * 360degrees/60 seconds
    secondHand.style.transform = "rotate(" + secRotation + "deg)";
    second++;
  }

  function minuteRotation() {
    var minRotation = (minute * 6) + (second * 0.1);// --> minutes * 360/degrees/60minutes) + (seconds * (360deg/60minutes)* (1 minute/60 seconds)
    minuteHand.style.transform = "rotate(" + minRotation + "deg)";
    minute++;
  }

  function hourRotation() {
    var hrRotation = (hour * 30) + (minute * 0.5);//--> hours * 360deg/12hours) + (minutes * 360deg/12hours)*(1 hour/60min)
    hourHand.style.transform = "rotate(" + hrRotation + "deg)";
    hour++;
  }
    /*
    var now = new Date();

var second = now.getSeconds();
var minute = now.getMinutes();
var hour = now.getHours();
console.log(hour + minute + second);
  }
  */
  
  /*
  //convert seconds, minutes and hours to degrees:
  var secRotation = second * 6; // --> seconds * 360degrees/60 seconds
  var minuteRotation = (minute * 6) + (second * 0.1);// --> minutes * 360/degrees/60minutes) + (seconds * (360deg/60minutes)* (1 minute/60 seconds)
  var hourRotation = (hour * 30) + (minute * 0.5);//--> hours * 360deg/12hours) + (minutes * 360deg/12hours)*(1 hour/60min)
  */
  
  /*
  secondHand.style.transform = "rotate(" + secondRotation + "deg)";
  minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
  hourHand.style.transform = "rotate(" + hourRotation + "deg)";
  */
  
//};





