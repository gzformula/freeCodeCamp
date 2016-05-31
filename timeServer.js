var strftime = require('strftime');
var http = require('http');
var url = require('url');
var jstr = '';

 module.exports = function (request, callback) { 
   var newTime = strftime('%Y-%m-%d %H:%M');
      // response.writeHead(200, { 'Content-Type': 'application/json' });
    var isoDate = new Date(Date.parse(url.parse(request.url, true).query[0]));
    if (url.parse(request.url, true).pathname == "/api/parsetime") {
     //iso time
     jstr = JSON.stringify({ 
         hour: addZero(isoDate.getHours()), 
         minute: addZero(isoDate.getMinutes()), 
         second: addZero(isoDate.getSeconds()) 
     });
    } else {
     //unixtime
     jstr = JSON.stringify({ unixtime: isoDate.getTime()});
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