var http = require('http');
var async = require('async');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var i = 2;
var fulltext = '';

function geturl (c) {
	http.get(process.argv[i], function(response) {
		response.setEncoding('utf8');

		response.on('error', console.error);
		response.on('data', function(data) {
			fulltext+=data;
		});
		response.on('end', function(end) {
			console.log(fulltext);
			fulltext = '';
			i++;
			c(null);
		});
	});
}
async.series([
	geturl,
	geturl,
	geturl
], function (err, results) {
	console.error;
});
