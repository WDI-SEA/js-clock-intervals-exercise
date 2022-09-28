
const secondHand=document.getElementById('second')
const minuteHand=document.getElementById('minute')
const hourHand=document.getElementById('Hour')
//initial varibles


//one function for initial position





setInterval(() => {
   let  date = new Date(); 
    let hour = date.getHours();
    let min= date.getMinutes();
    let second = date.getSeconds();
    hr_rotation = 30 * hour + min / 2; 
    min_rotation = 6 * min;
    sec_rotation = 6 * second;
  
    hourHand.style.transform = `rotate(${hr_rotation}deg)`;
    minuteHand.style.transform = `rotate(${min_rotation}deg)`;
    secondHand.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

