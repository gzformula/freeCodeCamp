var strftime = require('strftime');
var http = require('http');
var url = require('url');
var jstr = '';

 module.exports = function (date, callback) { 
      
      // response.writeHead(200, { 'Content-Type': 'application/json' });
    var isoDate = new Date(Date.parse(date));
    console.log("isoDate:", isoDate);
    if (isDate(isoDate)) {
     jstr = JSON.stringify({ unixtime: isoDate.getTime(), natural: strftime('%B %d, %Y') });
    }
   callback(null,jstr);
 };
 
function addZero(i) {
    if (i < 10) {
        var istr = "0" + i.toString();
        return istr;
    } else {
        return i;
    }
}

function isDate(date) {
    var date = new Date();
    return date instanceof Date && !isNaN(date.valueOf());
}