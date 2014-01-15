var fs=require('fs')
var file=process.argv[2]

// returns a buffer containing the contents of file
var buff=fs.readFileSync(file)
// converts buffer to string
var f_string=buff.toString()
// splits string on newline character
var s_string=f_string.split('\n')

//console.log(f_string)
console.log(s_string.length-1)
