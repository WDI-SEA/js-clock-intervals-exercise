// var degrees = 6;
// var el = document.getElementById("second");
// el.style.transform = "rotate(" + degrees + "deg)";

  // var secondHand = function() {
  //   document.getElementById('second').style.transform = 'rotate(6deg)';
  // }
  d = new Date();
  d.getSeconds();
  d.getMinutes();
  d.getHours();

  var secondhand = d.getSeconds();
  var minutehand = d.getMinutes();
  var hourhand = d.getHours();
  var second = document.getElementById('second');
  var minute = document.getElementById('minute');
  var hour = document.getElementById('hour');
  var initialize = function() {
    second.style.transform = "rotate(" + (secondhand * 6) + "deg)";
    minute.style.transform = "rotate(" + (minutehand * 6) + "deg)";
    hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
    console.log("first", minutehand)
  }

  initialize();

  setInterval(function () {
    secondhand += 1;
    second.style.transform = "rotate(" + (secondhand * 6)  + "deg)";
  }, 1000);

  setInterval(function () {
    minutehand += (6/360);
    console.log(minutehand);
    minute.style.transform = "rotate(" + (minutehand * 6) + "deg)";
  }, 1000);

  setInterval(function () {
    hourhand += (6/3600);
    hour.style.transform = "rotate(" + (hourhand * 30) + "deg)";
  }, 1000);



// var secondHand2 = function() {
//   document.getElementById('second').style.transform = 'rotate(12deg)';
// }
// var ticketSecond2 = setTimeout(secondHand2, 2000);
//
// var secondHand3 = function() {
//   document.getElementById('second').style.transform = 'rotate(18deg)';
// }
// var ticketSecond3 = setTimeout(secondHand3, 3000);
//
// var secondHand4 = function() {
//   document.getElementById('second').style.transform = 'rotate(24deg)';
// }
// var ticketSecond4 = setTimeout(secondHand4, 4000);
