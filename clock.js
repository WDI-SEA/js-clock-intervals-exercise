
// declaring my constant variables
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var secondHand = document.getElementById("second");


function clock(){
    //var new date provides real time 
    console.log(curDate);
    var curDate = new Date();
    let hour = curDate.getHours();
    let minute = curDate.getMinutes();
    let second = curDate.getSeconds();
    // console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
    // declaring my let variables for the keeping time algorthim
    let hrPosition = hour * 360/12 + ((minute * 360/60)/12);
    let minPosition = (minute * 360/60) + (second * 360/60)/60;
    let secPosition = second * 360/60;
    //declaring that the hr, sec, and min hand will roatate
    //Example: the hr hand will rotate at a rate of the var hour times 360/12 plus the var minute times 360/60/12* 
    //*set at the variable hour which set to local time

    hourHand.style.transform = "rotate(" + hrPosition + "deg)";
    minuteHand.style.transform = "rotate(" + minPosition + "deg)";
    secondHand.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(clock, 1000);