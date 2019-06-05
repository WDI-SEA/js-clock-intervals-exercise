

var minuteHand = document.querySelector('#minute');
var hourHand = document.querySelector('#hour');
var secondHand = document.querySelector('#second');
var m = 0;
var h = 0;
var s = 0;
 

/// im still trying to figured the numbers
setInterval(minRotation, 60000);
setInterval(hrRotation, 720000);
setInterval(secRotation, 1000);

function minRotation(){
    // this minute works but in correct i haven't figured out the numbers
    var degrees = (m/60)* 360
    minuteHand.style.transform = "rotate(" + degrees + "deg)";
    m++;
   
}




function hrRotation(){
    var hrDegrees = (h/12)* 360
    
hourHand.style.transform = "rotate(" + hrDegrees + "deg)";
h++;
}





function secRotation(){
    var secDegrees = (s/60)* 360
    
secondHand.style.transform = "rotate(" + secDegrees + "deg)";
s++;
}





//hourHand.style.transform = "rotate(" + degrees + "deg)";



//secondHand.style.transform = "rotate(" + degrees + "deg)";


// var intervalHandle = setInterval(function(){
//     var degrees = (59 / 60) * 360
  
//   }, 10000)

  
