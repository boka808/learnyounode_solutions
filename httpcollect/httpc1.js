var http = require('http');
var url = process.argv[2];

var length = 0;
var fulltext = '';

http.get(url, function(response) {
	response.setEncoding('utf8');

	response.on('error', console.error);
	response.on('data', function(data) {
		length+=data.length;
		fulltext+=data;
	});
	response.on('end', function(end) {
		console.log(String(length));
		console.log(fulltext);
		return;
	});
});

