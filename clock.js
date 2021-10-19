//focus on each hand moving on its own interval
//One section for each hand
//each hand would involve its own set intervals

//grab the elements that corrsepond with each hand

//Grabbing the DOM in the beginning

// let minHand = 0;
// let hrHand = 0;

const hourRotation = (conv) => {
  return (conv / 12) * 360;
};

const minuteRotation = (conv) => {
  return (conv / 60) * 360;
};

// let secHand = 0;
const secondRotation = (conv) => {
  return (conv / 60) * 360;
};

function second() {
  const date = new Date();
  const se = date.getSeconds();
  const degree = secondRotation(se);
  let sec = document.getElementById("second");
  sec.style.transform = "rotate(" + degree + "deg)";
  degree++;
  setInterval(second, 1000);
}

setInterval(second, 1000);

function minute() {
  const dateM = new Date();
  const mi = dateM.getMinutes();
  const minHand = minuteRotation(mi);
  let min = document.getElementById("minute");
  min.style.transform = "rotate(" + minHand + "deg)";
  minHand++;
  setInterval(minute, 1500);
}

setInterval(minute, 1500);

function hourMove() {
  const dateH = new Date();
  const hour = dateH.getHours();
  const hrHand = hourRotation(hour);
  let hr = document.getElementById("hour");
  hr.style.transform = "rotate(" + hrHand + "deg)";
  hrHand++;
  setInterval(hourMove, 2000);
}

setInterval(hourMove, 2000);
// setInterval(min, 1000)
// setInterval(hr, 1000)
