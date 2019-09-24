

setInterval(function() {
    degreesELM += 3;
    return degreesELM
}, 60000)

setInterval(function() {
    degreesELS += 3;
    return degreesELS
}, 1000)

setInterval(function() {
    degreesELH += 15;
    return degreesELH
}, 3600000)

degreesELM = 0;
degreesELS = 0;
degreesELH = 0;

var elm = document.getElementById("minute");
    setInterval(function() {
        elm.style.transform = "rotate(" + degreesELM + "deg)";
        console.log('minute')
    }, 60000)

var els = document.getElementById("second");
    setInterval(function() {
        els.style.transform = "rotate(" + degreesELS+ "deg)";
        console.log('second')
    }, 1000)

var elh = document.getElementById("hour");
    setInterval(function() {
        elh.style.transform = "rotate(" + degreesELH + "deg)";
        console.log('hour')
    }, 3600000)
