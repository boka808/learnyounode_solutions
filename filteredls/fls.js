var fs=require('fs');
var pt=require('path');
var path=process.argv[2];
var ext=process.argv[3];

// returns a list of files in the directory
fs.readdir(path, function (err, list) {
	if (err) throw err;
	list.forEach(function (entry) {
		if (pt.extname(entry).slice(1) == ext) {
			console.log(entry);
		}
		else {
			//console.log("FAILED: "+entry+"\n\tREAD: "+pt.extname(entry));
			//console.log("EXT: "+ext);
		}
	});
});
