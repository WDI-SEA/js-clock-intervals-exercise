// create intervals in JS to make the clock tick
// use CSS transform to rotate the hands of the clock
// change CSS values in JS by getting reference to them through the DOM
//      and setting a new value to their CSS properties
// it would be useful to define functions that convert
//      seconds, minutes and hours to how many degrees the hands
//          should be rotated around the clock

var count = 0;
var interval = null;

var s = document.getElementById('second');
var m = document.getElementById('minute');
var h = document.getElementById('hour');

var sec = 0;
var min = 0;
var hour = 0;

var ticToc = function() {
    
    var date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    let sDeg = sec * 360/60;
    let mDeg = (sec * 360/60)/60;
    let hDeg = (sec * 360/60)/60/12;
    
    // let sDeg = count * 360/60;
    // let mDeg = (count * 360/60)/60;
    // let hDeg = (count * 360/60)/60/12;
    s.style.transform = 'rotate(' + sDeg + 'deg)';
    m.style.transform = 'rotate(' + mDeg + 'deg)';
    h.style.transform = 'rotate(' + hDeg + 'deg)';
    count++;
};

interval = setInterval(ticToc, 1000);

var countUp = function() {
    if (count = 0) {
        count++;
        interval();
    };
};