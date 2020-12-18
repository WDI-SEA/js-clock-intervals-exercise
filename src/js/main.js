// Variables
const secondHand = document.querySelector("[data-selector='second']");

const second = 1000;
let rotation = 1;

const rotateSecond = () => {
  rotation++ 
  secondHand.style.transform = "rotate("+ rotation + "deg)";
};

setInterval(rotateSecond, second);
