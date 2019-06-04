var secondEl = document.getElementById("second");
var minuteEl = document.getElementById("minute");
var hourEl = document.getElementById("hour");
var tick = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var clock = function() {
    var start = new Date();
    var seconds = start.getSeconds();
    var minutes = start.getMinutes();
    var hours = start.getHours();
    var secDeg = seconds * 360/60;
    var minDeg = ((minutes * 360)/60) + (seconds / 3600) * 360; // second half of equation gives minute movement during seconds
    var hourDeg = ((hours * 360)/12) + (minutes / 720) * 360; // second half of equation gives hour movement during minutes
    console.log(secDeg);
    console.log(minDeg);
    console.log(hourDeg);

    secondEl.style.transform = "rotate(" + secDeg + "deg)";
    minuteEl.style.transform = "rotate(" + minDeg + "deg)";
    hourEl.style.transform = "rotate(" + hourDeg + "deg)";
};


count = setInterval(clock, 1000);

var clockTick = function() {
    if (tick === 0) {
        tick++;
        console.log(tick);
        count();
    };
};
