var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on("end", function(end) {
		// do nothing
		//console.log(end);
	});
	response.on("error", console.error);
});
