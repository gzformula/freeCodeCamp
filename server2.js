var express     = require('express'),
    mymodule = require('./timeServer.js'),
    url = require('url'),
    app         = express(),
    port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});


   app.get("/*", function(request, response) {
     var url_parts = url.parse(request.url, true);

     response.json(url_parts.path);
     
     mymodule(request, function(err, newTime) {
       if (err) throw err;
       newTime.forEach(function (file) {
         console.log(file);
       })
     });

     response.end();
   });

