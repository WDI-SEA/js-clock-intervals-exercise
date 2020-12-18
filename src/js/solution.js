
// Variable Declaration
const secondHand = document.querySelector("[data-selector='second']");


// Time conversions
const second = 6;


// Initializations
let secondRotation = 0;



// Functions
setInterval(() => {
  secondHand.style.transform = `rotate(${secondRotation += second}deg)`;
}, 1000);

