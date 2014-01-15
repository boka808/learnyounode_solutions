var fs=require('fs')
var file=process.argv[2]
var err
var buff

// uses callback function to process input file
fs.readFile(file, function(err, buff) {
	if (err) throw err
	// converts buffer to string
	var f_string=buff.toString()
	// splits string on newline character
	var s_string=f_string.split('\n')

	console.log(s_string.length-1)
});
