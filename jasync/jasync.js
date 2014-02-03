var http = require('http');
var async = require('async');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var fulltext = '';
function geturl1 (c) {
	http.get(url1, function(response) {
		response.setEncoding('utf8');

		response.on('error', console.error);
		response.on('data', function(data) {
			fulltext+=data;
		});
		response.on('end', function(end) {
			console.log(fulltext);
			fulltext = '';
			c(null);
		});
	});
}

function geturl2 (c) {
	http.get(url2, function(response) {
		response.setEncoding('utf8');

		response.on('error', console.error);
		response.on('data', function(data) {
			fulltext+=data;
		});
		response.on('end', function(end) {
			console.log(fulltext);
			fulltext = '';
			c(null);
		});
	});
}

function geturl3 (c) {
	http.get(url3, function(response) {
		response.setEncoding('utf8');

		response.on('error', console.error);
		response.on('data', function(data) {
			fulltext+=data;
		});
		response.on('end', function(end) {
			console.log(fulltext);
			fulltext = '';
			c(null);
		});
	});
}
async.series([
		geturl1,
		geturl2,
		geturl3
		], function (err, results) {
		console.error;
		});
