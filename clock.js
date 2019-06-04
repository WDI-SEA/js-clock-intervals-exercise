
// var degrees = 45;

// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";

// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360
var minuteHand = document.getElementById('minute')
var hourHand = document.getElementById('hour')
 var secondHand = document.getElementById('second');
 //create a function that upadates the clock

 function windUpTheClock() {
 var date = new Date();
 let hr = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();

let hour = (hr*360/12 ) ;
let minute = (min * 360/60) ;
let second = (sec * 360/60);

 function  rotateSecond (){
      secondHand.style.transform = "rotate(" + second + "deg)";
 }
  rotateSecond();

  function  rotateMinute (){
    
    minuteHand.style.transform = "rotate(" + minute + "deg)";
  }
rotateMinute();
  function  rotateHour (){
    
    hourHand.style.transform = "rotate(" + hour + "deg)";
  }
  rotateHour();
}

   var interval = setInterval(windUpTheClock,1000); 

   //gitcommit is not working makeing this line to gnagink]
       
 


 
//  var transfom= rotateSecond.style.transform;
//    var event = setInterval(function(){
//        transform(6)
//    },1000);

// var intervalHandler= setInterval(function(){
//     console.log('are we there yet');
  
//   },100);
//   setTimeout(function(){
//     clearInterval(intervalHandler);
//     console.log(" I just stopped the interval");
//   },6000);



// Use JavaScripts `Date` objects to display the actual
// time.

// ```
// var now = new Date();
// ```

// Get `now` by declaring a new Date object. You can google for "MDN date methods" to see what
// helpful methods are attached to Date objects. There's helpful things like `.getMonth()`, `.getSeconds()`
// and who knows what else!