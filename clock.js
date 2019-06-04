var secondHand = document.querySelector('#second');
var minuteHand = document.querySelector('#minute');
var hourHand = document.querySelector('#hour');


var s = 1;
var h = 1;
var m = 1;


// var degrees = 45;

// var secondHand = document.querySelector('#second');
// secondHand.style.transform = "rotate(" + degrees + "deg)";

//calculations
// 1hour=60min, 60min=3600seconds
setInterval(minRotation, 6000);
setInterval(hrRotation, 36000);
setInterval(secRotation, 100);    

    
function minRotation(){
    // this minute works but in correct i haven't figured out the numbers
    var mindegrees = m * 6
    minuteHand.style.transform = "rotate(" + mindegrees + "deg)"; m++;
   
}


function hrRotation(){
    var hrDegrees = h * 30
    hourHand.style.transform = "rotate(" + hrDegrees + "deg)"; h++;
}


function secRotation(){
    var secDegrees = s * 6
    secondHand.style.transform = "rotate(" + secDegrees + "deg)"; s++;
}







  