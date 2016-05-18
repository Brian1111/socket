var moment = require('moment');
var now = moment();

// console.log(now.format('')); 
// console.log(now.format('X')); 
// console.log(now.format('x')); 
console.log(now.valueOf('')); 

var timestamp = 1463543184914;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));


// console.log(now.format(' MMM Mo YYYY, h:mm a')); // 6:45 pm