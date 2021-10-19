// Variables for the images to style/rotate via JS
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

// 3 functions, one for each arm.  Each one has a ticker (setTimeout) that ticks for 1 second and updates the function in each recursion. These recursions grab the current hour, minute, and second and pass that number to the style.rotate dom change to move the hands.  


// Setting recursive function for rotation seconds by grabbing current time and transforming the second hand to the correct degree
// uses Date + get... to pull in current time.  Uses those times to calculate the degree to transform the hands into the right position.
 const secRotation = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    second.style.transform = 'rotate(' + (seconds / 60*360) + 'deg)';
    //console.log("Seconds: ", seconds);
    setTimeout(secRotation, 1000);
  }
  secRotation();
// Calculation to continuously update the minute hand added
  const minRotation = () => {
    let now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minute.style.transform = 'rotate(' + (minutes + (seconds / 60)) / 60 * 360 + 'deg)';
    setTimeout(minRotation, 1000);
  }
  minRotation();
// Calculation to continuously update the hour hand added
  const hourRotation = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hour.style.transform = 'rotate(' + (hours + (minutes / 60) + (seconds / 3600)) / 12 * 360 + 'deg)';
    setTimeout(hourRotation, 1000);
  }
  hourRotation();