
//Setting the variable to store the sec,min,hour elements by Id from DOM
var hour_hand = document.getElementById("hour");
var min_hand = document.getElementById("minute");
var sec_hand = document.getElementById("second");

var now = new Date();


//Setting the variable to store the min,sec and hour to initial values of now
//
var hour = now.getHours()%12;
var min = now.getMinutes();
var sec = now.getSeconds();


//Declaring the variable to store the hour,min,sec degrees later.
var hour_deg;
var min_deg;
var sec_deg;



//This function is updating the clock after every second
function updateClock(){
    sec++;
    if (sec === 60){
        sec = 0;
        min++;
        if (min === 60){
            min = 0;
            hour++;
            if(hour === 12){
                hour = 0
            }
        }
    }
console.log(sec + ' '+min + ' ' + hour  )
  
 //Calculating the degrees that sec,min and hour moves each time
    sec_deg = (sec/60)*360;
    min_deg = (min/60)*360;
    hour_deg= (hour/12)*360;

 //   Using the CSS transform property to rotate the sec,min,hour hand by the calculted degree 
    sec_hand.style.transform = "rotate(" + sec_deg + "deg)";
    min_hand.style.transform = "rotate(" + min_deg + "deg)";
    hour_hand.style.transform = "rotate(" + hour_deg + "deg)";
}

updateClock();

//JS builtin(setInterval) function is calling the function updateClock every 1000 millisec
setInterval(updateClock, 1000)

