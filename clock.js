var hour   = document.getElementById( "hour"   );
var minute = document.getElementById( "minute" );
var second = document.getElementById( "second" );

var now, thisSecond, thisMinute, thisHour;

getAndSetTime();

setInterval( getAndSetTime, 1000 );

function getAndSetTime(){

    now = new Date();

    second.style.transform = "rotate(" + ( now.getSeconds() / 60 ) * 360 + "deg)";
    minute.style.transform = "rotate(" + minuteRotation( now ) + "deg)";
    hour.style.transform   = "rotate(" + hourRotation( now   ) + "deg)";
}

function minuteRotation( now ){

    return ( now.getMinutes() / 60 ) * 360;
}


function hourRotation( now ){

    return ( now.getHours() / 12 ) * 360;
}