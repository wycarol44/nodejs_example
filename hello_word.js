var http = require('http');
var dt = require('./current_time');
var fs = require('fs'); // example for file system

http.createServer(function(req, res) {
    fs.readFile('home.html', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // example for module
        //res.write("The date and time are currently: " + dt.current_time());
        //res.end('Hello World!');
		
        // example for current query url
        //res.write(req.url);
		
        // example for parsing the parms to the url
        //var q = url.parse(req.url, true).query;
        //var txt = q.year + " " + q.month;
		//res.end(txt);
		
		// example for file system to show an html
        res.end(data);
    });
}).listen(8080);