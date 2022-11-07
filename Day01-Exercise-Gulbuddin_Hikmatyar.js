//area rectangle
var w = 10;
var h = 5;
var area = w*h;
var result = area;

//perimater rectangle
var perimater = w + w + h + h;
var result = perimater;

console.log(area);
console.log(perimater);

//diameter, circumference and area circle
var r = 7
var diameter = 2*r
var circle = Math.PI*r*r;
var circumference = 2*Math.PI*r;

console.log(diameter);
console.log(circle);
console.log(circumference);

//find angles of triangle
var angles1 = 70;
var angles2 = 80;
var angles3 = 180 - (angles1 + angles2);

console.log(angles3);

//convert days to years, month and days
var days = 400
var years = Math.floor(days / 365);
var month = Math.floor(days % 365 / 30);
var daysLeft = Math.floor(days % 365 % 30);

console.log(`${days} hari: ${years} year, ${month} month, ${daysLeft} days`)


