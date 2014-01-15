var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on("data", function(data) {
		console.log(data);
	});
	response.on("end", function(end) {
		// do nothing
		//console.log(end);
	});
	response.on("error", function(error) {
		// do nothing
		console.error;
	});
});
