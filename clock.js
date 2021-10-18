const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour)");

function secRotation() {
    let now = new Date();
    let seconds = now.getSeconds();
    second.style.transform = 'rotate(' + (seconds/60*360) + 'deg)';
    console.log(seconds);
    setTimeout(secRotation, 1000);
  }
  secRotation();

// function annoy () {
//     console.log("Are we there yet?")
//     setTimeout(annoy, 1000)
//   }
//   const kids = setTimeout(annoy, 1000)



// On page load, start seconds timer and function that calculates how many degrees to turn
// pass seconds to minute and hour functions that calculate how many degrees to turn the arm
//secondRotation(0); // returns 0
//secondRotation(59); // returns (59 / 60) * 360

//hourRotation(12); // returns 0
//hourRotation(5); // returns (5 / 12) * 360