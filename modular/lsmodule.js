var fs=require('fs');
var pt=require('path');

module.exports = function (path, ext, output_list) {
	fs.readdir(path, function (err, ls) {
		if (err) return output_list(err);
		var list = new Array;
		ls.forEach(function (entry) {
			if (pt.extname(entry).slice(1) == ext) {
				list.push(entry);
			}
		});
		output_list(null, list);
	});
}
