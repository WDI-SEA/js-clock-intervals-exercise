//Global variable set to address reversing hands "problem"
const allHands    = document.querySelectorAll('.hand')
// Using Request Animation Frame instead of setInterval to refresh browser animation
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          function( callback ){
              window.setTimeout(callback, 1000 / 60);
          };
})();

(function loop(){
        requestAnimFrame(loop);
        clock();
    })();
// Clock time variables are stored in an array for simpler syntax
// Main clock logic - note hours calculation adjusts hour hand for accurate movement

}
function clock() {
  var date = new Date();
  var time = [date.getSeconds(), date.getMinutes(), date.getHours()];
  var secondsDegrees = (date.getSeconds() * 6);
  var minutesDegress = (date.getMinutes() * 6);
  var hoursDegrees = (date.getHours() * 30 + date.getMinutes() * 360/60/12);

  var time = [ document.getElementById("second"), document.getElementById("minute"), document.getElementById("hour") ];

  if(secondsDegrees === 0) {
    allHands.forEach(hand => hand.style.transition = 'none')  // remove the all 0.05s transition
  } else {
    allHands.forEach(hand => hand.style.transition = '')      // using '' removes the inline style and reverts back to the stylesheet
  }
  time[0].style.transform = `rotate(${secondsDegrees}deg)`;
  time[1].style.transform = `rotate(${minutesDegress}deg)`;
  time[2].style.transform = `rotate(${hoursDegrees}deg)`;
}
    