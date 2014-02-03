Notes on nodejs
===============

Callback function simplification
--------------------------------

callback function automagically takes in the data as input...
if only one action needs to be taken on it, this is a valid statement:

for http.get(url, function(response) {
	response.setEncoding('utf8');
	response.on(type, function (data) {
		<callbackfunction>(data);
	});
	...
});

for <callbackfunction>
	console.log

this can be simplified to
	response.on(type, console.log);

Async 
-----

  * See these links

    * http://stackoverflow.com/questions/15969082/node-js-async-series-is-that-how-it-is-supposed-to-work

    * http://stackoverflow.com/questions/13003178/not-every-function-in-async-js-series-executes
