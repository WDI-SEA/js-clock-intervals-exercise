const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
const now = new Date();

// Setting recursive function for rotation seconds by grabbing current time and transforming the second hand to the correct degree
const secRotation = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    second.style.transform = 'rotate(' + (seconds/60*360) + 'deg)';
    console.log("Seconds: ", seconds);
    setTimeout(secRotation, 1000);
  }
  secRotation();

  const minRotation = () => {
    let now = new Date();
    let minutes = now.getMinutes();
    minute.style.transform = 'rotate(' + (minutes/60*360) + 'deg)';
    console.log("Minutes: ", minutes);
    setTimeout(minRotation, 1000);
  }
  minRotation();

  const hourRotation = () => {
    let now = new Date();
    let hours = now.getHours();
    hour.style.transform = 'rotate(' + (hours/12*360) + 'deg)';
    console.log("Hours", hours);
    setTimeout(hourRotation, 1000);
  }
  hourRotation();