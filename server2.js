var express     = require('express'),
    timeMod = require('./timeServer.js'),
    url = require('url'),
    app         = express(),
    port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});


app.get("/*", function(request, response) {
    var url_parts = url.parse(request.url, true).path;

    var qstr = url_parts.split("/")[1];
    qstr = qstr.replace(/%20/g,' ');
    
    timeMod(qstr, function(err, newTime) {
       if (err) throw err;
         console.log(newTime);
         response.send(newTime);
    });

    response.end();
});

