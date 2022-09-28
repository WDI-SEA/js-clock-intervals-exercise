
const secondHand=document.getElementById('second')
const minuteHand=document.getElementById('minute')
const hourHand=document.getElementById('hour')
//initial varibles


//one function for initial position





setInterval(() => {
   let  date = new Date(); 
    let hour = date.getHours();
    let min= date.getMinutes();
    let second = date.getSeconds();
    hr_rotation = 30*hour; 
    min_rotation = 6 * min;
    sec_rotation = 6 * second;
//   let secondTime=date.getSeconds()*6
//   let minuteTime=date.getMinutes()*6
//   let hourTime=date.getHours()*30

//     hourHand.style.transform = `rotate(${hourTime}deg)`;
    
//     minuteHand.style.transform = `rotate(${minuteTime}deg)`;
//     secondHand.style.transform = `rotate(${secondTime}deg)`;
hourHand.style.transform = `rotate(${hr_rotation}deg)`;
    
    minuteHand.style.transform = `rotate(${min_rotation}deg)`;
    secondHand.style.transform = `rotate(${sec_rotation}deg)`;


}, 1000);

