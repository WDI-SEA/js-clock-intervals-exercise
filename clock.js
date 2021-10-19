//focus on each hand moving on its own interval
//One section for each hand 
//each hand would involve its own set intervals

//grab the elements that corrsepond with each hand 

//Grabbing the DOM in the beginning 

let degrees = 45;
let time = 90;
let clock = 170

let sec = document.getElementById("second");
sec.style.transform = "rotate(" + degrees + "deg)";

let min = document.getElementById("minute");
min.style.transform = "rotate(" + clock + "deg)";

let hr = ocument.getElementById("hour");
hr.style.transform = "rotate(" + time + "deg)";


