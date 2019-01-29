
    var second = document.getElementById("second");
    var minute = document.getElementById("minute");
    var hour = document.getElementById("hour");
    
    var secDegree = 0;
    var mDegree = 0; 
    var hDegree = 0; 

// below represents the clock functionality. 


    setInterval(function(){
        second.style.transform = "rotate(" + secDegree + "deg)";
        secDegree = secDegree + 6; 
     }, 1000); 

     setInterval(function(){
        minute.style.transform = "rotate(" + mDegree + "deg)";
        mDegree = mDegree + 6; 
     }, 60000); 
    
     setInterval(function(){
        hour.style.transform = "rotate(" + hDegree + "deg)";
        hDegree = hDegree + 30; 
     }, 3600000); 
    
    

// Correct Date and Time 