var strftime = require('strftime');
var http = require('http');
var url = require('url');
var jstr = '';

 module.exports = function (date, callback) { 
    if (!isNumeric(date)) {
      var isoDate = new Date(Date.parse(date));
    } else {
      var isoDate = new Date(date*1000);
    }

console.log("isoDate", isoDate);
console.log("isDate:", isDate(isoDate));

    if (isDate(isoDate)) {
        jstr = JSON.stringify({ unixtime: isoDate.getTime(), natural: strftime('%B %d, %Y', new Date(isoDate.getTime())) });
    } else {
        jstr = JSON.stringify({ unixtime: null, natural: null });
    }
   callback(null,jstr);
 };

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isDate(d) {
    if ( Object.prototype.toString.call(d) === "[object Date]" ) {
  // it is a date
  if ( isNaN( d.getTime() ) ) { 
    // date is not valid
    return false;
  }
  else {
    // date is valid
    return true;
  }
}
else {
  // not a date
  return false;
}
}