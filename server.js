var express     = require('express'),
    timeMod = require('./timeServer.js'),
    url = require('url'),
    app         = express(),
    port = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});

app.get("/index", function(request, response) {
        if (root == '' || root == 'index.html') {
        response.writeHead(301, {
          Location: (request.socket.encrypted ? 'https://' : 'http://') +
          request.headers.host + '/index.html'}
    );
    response.end();
    return;
    }
});

app.get("/*", function(request, response) {
    var root = url.parse(request.url, true).pathname.split('/')[1];
    
    root = root.replace(/%20/g,' ');
    
    timeMod(root, function(err, newTime) {
       if (err) throw err;
         console.log(newTime);
         response.send(newTime);
    });

    response.end();
});

