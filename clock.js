//Grab the elemnts "the clock hands" from the HTML so we can control them:
const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

//variables to represent the time starting from 12!
let secondsOnClock = 0, minutesOnClock = 0, hoursOnClock = 0
let dgree
    
    //functions that converts h, m, s to degrees. "it will be used to modefy the styling"
    //since the clock won't be live --> give the local time, we should keep incrementing the dgree 
    function secondRotation(){
        dgree = (secondsOnClock/60)*360
         second.style.transform = `rotate(${dgree}deg)`
         //if the seconds hand done with one rotation on the clock then the minute hand function will start moving!
         if(dgree%60 === 0){
            //by using setTimeout becuase we want to run the function "the minute hand" only once!
             setTimeout(minuteRotation, 1000) 
         }
         secondsOnClock++
        }
        
        
        function minuteRotation(){
            dgree = (minutesOnClock/60)*360
            minute.style.transform = `rotate(${dgree}deg)`
            //if the minutes hand done with one rotation on the clock then the hours hand function will start moving!
            if(dgree%60 === 0){
                setTimeout(hourRotation, 1000)
            }
            minutesOnClock++
        }
    
    function hourRotation(){
         dgree = (hoursOnClock/12)*360
         hour.style.transform = `rotate(${dgree}deg)`
         hoursOnClock++
        }
    
// }

//To make the clock functional-- moving--
setInterval(secondRotation, 1000)



//--------------Bonus-----------------------
// setInterval(() => {

//     //by using already built in Date and it's methods to get current h, m, s
// let day = new Date()
// let hh = day.getHours() * 30
// let mm = day.getMinutes() * 6
// let ss = day.getSeconds() * 6

// //transform property to rotate the hands of the clock!
// hour.style.transform = `rotate(${hh+(mm/12)}deg)`;
// minute.style.transform = `rotate(${mm}deg)`;
// second.style.transform = `rotate(${ss}deg)`;

// }, 1000)


