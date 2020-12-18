
    var second = document.getElementById('second');
    var minute = document.getElementById('minute');
    var hour = document.getElementById('hour');

    // initial position
    var secondDg = 0;
    var minuteDg = 0;
    var hourDg = 0;

    tick(); 
    var inter = setInterval(tick,1000);

    function tick(){
        
        secondDg = secondDg + 6;
        rotate(second,secondDg);

        minuteDg = minuteDg + 0.1;
        rotate(minute,minuteDg);
        
        hourDg = hourDg + 0.0083;
        rotate(hour,hourDg);
        
    }

    function rotate(el, degrees){
        el.style.transform = "rotate(" + degrees + "deg)";
    }



