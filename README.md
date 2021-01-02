# JavaScript Clock Intervals

Create a webpage that displays a clock where the
second, minute, and hour hands tick.

Write CSS to have the clock face, second, minute, hour
hands all display correctly on top of each other. Make
sure the red second hand displays on top of the minute
and hour hand. (Try changing the order the div elements
are written in the HTML)

Create intervals in the JavaScript file to make the
clocks tick.

Use CSS transform rotation to rotate the hands of the
clock.

```css
#myElement {
  transform: rotate(45deg);
}
```

Change CSS values in JavaScript by getting reference
to them through the DOM and setting a new value to
their CSS properties:

```js
var degrees = 45;

var el = document.getElementById("myElement");
el.style.transform = "rotate(" + degrees + "deg)";
```

It would be useful to define functions that convert
seconds, minutes and hours to how many degrees the
hand should be rotated around the clock!

```js
secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360
```

## Bonus: Show Actual Time
Use JavaScripts `Date` objects to display the actual
time.

```
var now = new Date();
```

Get `now` by declaring a new Date object. You can google for "MDN date methods" to see what
helpful methods are attached to Date objects. There's helpful things like `.getMonth()`, `.getSeconds()`
and who knows what else!

See the full list of methods in the left sidebar on this site:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

