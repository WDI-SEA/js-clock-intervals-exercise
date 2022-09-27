let degrees = 6;
const el = document.getElementById("second")
el.style.transform = "rotate(" + degrees + "deg)";

const secondHand = setTimeout(el, 1000)


const el2 = document.getElementById("minute")
el2.style.transform = "rotate(" + degrees + "deg)";

const minuteHand = setTimeout(el2, 60000)


const el3 = document.getElementById("hour")
el3.style.transform = "rotate(" + degrees + "deg)";

const hourHand = setTimeout(el3,3,600,000)