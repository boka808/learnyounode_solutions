var lsmodule=require('./lsmodule');
var path=process.argv[2];
var ext=process.argv[3];

lsmodule (path, ext, function (err, list) {
	if (err) throw err;
	list.forEach(function(entry) {
		console.log(entry);
	});
});
