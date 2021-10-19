// 1. Each hand is going to move at different intervals...intervals because they call the function more than once.
// 2. Each hand is going to rotate (using css transform) a different amount of degrees at different intervals
//      2a. Second Hand - 60 rotations across 360 degrees
//              360/60 = 6 degrees each 1000 milliseconds
//      2b. Minute Hand - 60 rotations across 360 degrees
//              360/60 = 6 degrees each 60000 milliseconds
//      2c. Hour Hand - 12 rotations across 360 degrees
//              360/12 = 30 degrees each 3,600,000 milliseconds


//3. DOM Manipulation: Get each hand by it's #id to then change it's transform method
//      3a. Will probably need a variable to store the degrees and update that each time that our interval function is called.
//      3a. cont. rough example: setTimeout will use the respective time and each function call will adjust the degrees by which
//          the hand "rotates"
//      3b. On a full cycle, the entire program resets...namely at 12:00:00

//This is our control variable for Seconds Hand
let degVar = 0

//This is our control variable for Minute Hand
let degMinVar = 0

//This is our control variable for Minute Hand
let degHorVar = 0

//get the element by its ID and see if you can rotate it using JS.
const secondHand = document.getElementById('second');
//Define a function that maniupalets the second hand image, rotates it by 6 degrees, each time 1000 milliseconds pass
const secondFunction = () => {
    //Set this function to call itself recursively
    setTimeout(secondFunction, 1000);
    //Manipualtes DOM to reflect new value each time the function runs
    secondHand.style.transform = `rotate(${degVar}deg)`;
    //updates our degrees control variable by 6
    degVar = degVar + 6;
}
//The event listener has to listen for when the document loads
secondHand.addEventListener('DOMContentLoaded', secondFunction());


//get the element by its ID and see if you can rotate it using JS.
const minuteHand = document.getElementById('minute');
//Define a function that maniupalets the second hand image, rotates it by 6 degrees, each time 1000 milliseconds pass
const minuteFunction = () => {
    //Set this function to call itself recursively
    setTimeout(minuteFunction, 61000);
    //Manipualtes DOM to reflect new value each time the function runs
    minuteHand.style.transform = `rotate(${degMinVar}deg)`;
    //updates our degrees control variable by 6
    degMinVar = degMinVar + 6;
}
//The event listener has to listen for when the document loads
minuteHand.addEventListener('DOMContentLoaded', minuteFunction());

//Functionality for the Hour Hand
//get the element by its ID and see if you can rotate it using JS.
const hourHand = document.getElementById('hour');
//Define a function that maniupalets the Hour hand image, rotates it by 30 degrees, each time 3,610,000 milliseconds pass
const hourFunction = () => {
    //Set this function to call itself recursively
    setTimeout(hourFunction, 3610000);
    //Manipualtes DOM to reflect new value each time the function runs
    hourHand.style.transform = `rotate(${degHorVar}deg)`;
    //updates our degrees control variable by 6
    degHorVar = degHorVar + 30;
}
//The event listener has to listen for when the document loads
hourHand.addEventListener('DOMContentLoaded', hourFunction());

